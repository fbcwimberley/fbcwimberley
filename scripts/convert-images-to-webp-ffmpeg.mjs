#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const STATIC_DIR = path.join(ROOT, 'static');
const IMAGE_ROOT = path.join(STATIC_DIR, 'images');
const SEARCH_DIRS = [path.join(ROOT, 'src')];
const TEXT_EXT_RE = /\.(svelte|ts|js|css|html)$/i;
const CONVERT_EXT_RE = /\.(jpe?g|png|gif)$/i;

function toPosix(p) {
	return p.split(path.sep).join('/');
}

async function walk(dir) {
	const out = [];
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...(await walk(full)));
		} else if (entry.isFile()) {
			out.push(full);
		}
	}
	return out;
}

async function getTextFiles() {
	const files = [];
	for (const dir of SEARCH_DIRS) {
		const all = await walk(dir);
		for (const file of all) {
			if (TEXT_EXT_RE.test(file)) files.push(file);
		}
	}
	return files;
}

async function main() {
	const imageFiles = (await walk(IMAGE_ROOT)).filter((f) => CONVERT_EXT_RE.test(f));
	if (imageFiles.length === 0) {
		console.log('No JPG/PNG/GIF files found under static/images.');
		return;
	}

	const map = new Map();
	const failures = [];

	for (const input of imageFiles) {
		const out = input.replace(/\.(jpe?g|png|gif)$/i, '.webp');
		const result = spawnSync('ffmpeg', [
			'-y',
			'-i',
			input,
			'-c:v',
			'libwebp',
			'-q:v',
			'82',
			'-compression_level',
			'6',
			out
		], { stdio: 'ignore' });

		if (result.status !== 0) {
			failures.push(input);
			continue;
		}

		const fromPublic = '/' + toPosix(path.relative(STATIC_DIR, input));
		const toPublic = '/' + toPosix(path.relative(STATIC_DIR, out));
		map.set(fromPublic, toPublic);
		console.log(`Converted ${fromPublic} -> ${toPublic}`);
	}

	if (map.size === 0) {
		console.log('No images converted.');
		if (failures.length) {
			console.error(`Failed: ${failures.length}`);
		}
		return;
	}

	const textFiles = await getTextFiles();
	let changed = 0;
	for (const file of textFiles) {
		const original = await fs.readFile(file, 'utf8');
		let next = original;
		for (const [from, to] of map.entries()) {
			next = next.split(from).join(to);
		}
		if (next !== original) {
			await fs.writeFile(file, next, 'utf8');
			changed += 1;
		}
	}

	for (const [from] of map.entries()) {
		const oldFile = path.join(STATIC_DIR, from.slice(1));
		await fs.unlink(oldFile).catch(() => {});
	}

	console.log(`Updated references in ${changed} files.`);
	if (failures.length) {
		console.error(`Failed to convert ${failures.length} files.`);
		for (const f of failures) console.error(` - ${f}`);
		process.exitCode = 1;
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
