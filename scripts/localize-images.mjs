#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

const ROOT = process.cwd();
const SOURCE_DIRS = ['src'];
const TARGET_DIR = path.join(ROOT, 'static', 'images', 'remote');
const IMAGE_EXT_RE = /\.(png|jpe?g|webp|gif|avif|svg)$/i;
const URL_RE = /https?:\/\/[^'"\s)]+/g;
const DRY_RUN = process.argv.includes('--dry-run');

function isImageUrl(raw) {
	try {
		const u = new URL(raw);
		const pathname = u.pathname.toLowerCase();
		return IMAGE_EXT_RE.test(pathname);
	} catch {
		return false;
	}
}

function safeBaseName(url) {
	const u = new URL(url);
	const original = path.basename(u.pathname);
	const ext = path.extname(original) || '.img';
	const nameNoExt = (original.slice(0, -ext.length) || 'image').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
	const slugHost = u.hostname.replace(/[^a-zA-Z0-9.-]+/g, '-');
	const hash = createHash('sha1').update(url).digest('hex').slice(0, 10);
	return `${slugHost}-${nameNoExt || 'image'}-${hash}${ext}`;
}

async function getFiles(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await getFiles(full)));
		} else if (entry.isFile()) {
			if (/(\.svelte|\.ts|\.js|\.css|\.html)$/i.test(entry.name)) {
				files.push(full);
			}
		}
	}
	return files;
}

async function ensureDir(p) {
	await fs.mkdir(p, { recursive: true });
}

async function download(url, outFile) {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`HTTP ${res.status} for ${url}`);
	}
	const ab = await res.arrayBuffer();
	await fs.writeFile(outFile, Buffer.from(ab));
}

async function main() {
	const files = [];
	for (const dir of SOURCE_DIRS) {
		files.push(...(await getFiles(path.join(ROOT, dir))));
	}

	const fileText = new Map();
	for (const file of files) {
		fileText.set(file, await fs.readFile(file, 'utf8'));
	}

	const imageUrls = new Set();
	for (const text of fileText.values()) {
		const matches = text.match(URL_RE) || [];
		for (const m of matches) {
			if (isImageUrl(m)) {
				imageUrls.add(m);
			}
		}
	}

	const urls = [...imageUrls].sort();
	if (urls.length === 0) {
		console.log('No external image URLs found.');
		return;
	}

	console.log(`Found ${urls.length} external image URLs.`);
	await ensureDir(TARGET_DIR);

	const map = new Map();
	for (const url of urls) {
		const filename = safeBaseName(url);
		const rel = `/images/remote/${filename}`;
		const outFile = path.join(TARGET_DIR, filename);
		map.set(url, rel);

		if (DRY_RUN) {
			console.log(`[dry-run] ${url} -> ${rel}`);
			continue;
		}

		try {
			await download(url, outFile);
			console.log(`Downloaded ${url} -> ${rel}`);
		} catch (err) {
			console.error(`Failed ${url}: ${err.message}`);
			map.delete(url);
		}
	}

	if (DRY_RUN) {
		console.log('Dry run complete. No files written and no references changed.');
		return;
	}

	let changedFiles = 0;
	for (const [file, original] of fileText.entries()) {
		let next = original;
		for (const [from, to] of map.entries()) {
			next = next.split(from).join(to);
		}
		if (next !== original) {
			await fs.writeFile(file, next, 'utf8');
			changedFiles += 1;
		}
	}

	console.log(`Updated ${changedFiles} files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
