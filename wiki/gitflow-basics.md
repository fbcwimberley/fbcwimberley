# Basic Gitflow for This App

This guide is for making one small change at a time without stepping on anyone else's work.

Our workflow is simple:

1. Start from the latest `main`
2. Create a new branch
3. Make your changes
4. Commit and push your branch
5. Open a pull request on GitHub
6. Check the Vercel preview
7. Merge when everything looks good

## Quick Definitions

- `main`: the primary branch for the project
- `origin`: the GitHub remote for this repo
- branch: your own copy of the code for one task
- commit: a saved checkpoint with a message
- push: send your branch to GitHub
- pull request: a request to merge your branch into `main`
- Vercel preview: a test website built from your branch so you can review changes before merge

## Core Rule

Always update your local `main` from `origin/main` before starting a new branch.

If you skip this, you can start work from old code and create avoidable merge problems.

## Terminal Workflow

### 1. Go to the project folder

```bash
cd /home/jimmy/Projects/fbcwimberley
```

### 2. Switch to `main`

```bash
git checkout main
```

### 3. Pull the latest remote changes

```bash
git pull origin main
```

Your local `main` is now up to date with GitHub.

### 4. Create a new branch for your task

Pick a branch name that describes the change.

```bash
git checkout -b feature/update-homepage-copy
```

Other good examples:

- `feature/add-connect-card`
- `fix/mobile-header-spacing`
- `docs/update-gitflow-guide`

### 5. Make your changes

Edit the files you need in your editor.

### 6. Review what changed

```bash
git status
```

If you want to see the actual code changes too:

```bash
git diff
```

### 7. Stage your changes

To stage everything (Recomended way):

```bash
git add .
```

If you want to stage one file at a time:

```bash
git add path/to/file
```

### 8. Commit your work

Write a short message that explains what changed.

```bash
git commit -m "Update homepage copy"
```

Good commit messages:

- `Add family life weekend page`
- `Fix newsletter button styling`
- `Update connect page copy`

### 9. Push your branch to GitHub

```bash
git push -u origin feature/update-homepage-copy
```

The `-u` sets the upstream so future pushes are simpler. This must be done the first, and only the first time you push a branch to remote for the first time after creation.

After that, the next push is usually just:

```bash
git push
```

## JetBrains IDEA Git GUI Workflow

These steps do the same job as the terminal workflow above.

### 1. Open the project

Open the `fbcwimberley` project in JetBrains IDEA.

### 2. Switch to `main`

Use the branch picker in the top-right corner or the Git widget in the bottom bar.

1. Click the current branch name
2. Select `main`
3. Check it out

### 3. Pull the latest `main`

Use one of these:

- `Git` menu -> `Pull`
- or the pull/update icon in the toolbar

Make sure you are pulling the latest remote changes before making a new branch.

### 4. Create a new branch

1. Click the branch picker
2. Choose `New Branch`
3. Name it something clear like `feature/update-homepage-copy`
4. Create and switch to it

### 5. Make your changes

Edit files as normal in IDEA.

### 6. Review your changed files

Open the Commit tool window or Git tool window to review:

- which files changed
- what lines changed
- whether anything extra was accidentally included

### 7. Commit your changes

1. Open the Commit window
2. Select the files to include
3. Write a clear commit message
4. Click `Commit` or `Commit and Push`

If you choose `Commit` only, push in the next step.

### 8. Push your branch

1. Open `Git` -> `Push`
2. Confirm the branch name
3. Push to GitHub

Once pushed, GitHub will know about your branch and you can open a pull request.

## GitHub Pull Request Workflow

After your branch is pushed, finish the change in GitHub.

### 1. Open the repo on GitHub

Go to:

`https://github.com/fbcwimberley/fbcwimberley`

### 2. Open a pull request

GitHub will usually show a banner to create a pull request for your recently pushed branch.

If it does not:

1. Go to the `Pull requests` tab
2. Click `New pull request`
3. Set the base branch to `main`
4. Set the compare branch to your feature branch

### 3. Check the pull request details

Before creating or merging the PR, confirm:

- the title explains the change
- the changed files look correct
- only the intended work is included

## Vercel Preview Check

Every PR should be checked in Vercel before merge.

### 1. Find the preview deployment

In the pull request, look for the Vercel deployment or preview link.

### 2. Open the preview site

Click the preview URL and test the actual page in the browser.

### 3. Check the change carefully

At minimum, confirm:

- the page loads
- your change appears correctly
- there are no obvious layout problems
- mobile and desktop still look right if your change affects layout
- links and buttons still work if you changed them

If something looks wrong, go back to your branch, fix it, commit again, and push again.

The pull request and preview will update automatically after a new push.

## Merge When Everything Looks Good

Merge the pull request only after:

- the code in the PR is correct
- the Vercel preview looks right
- there are no obvious issues left to fix

Once merged, your changes become part of `main`.

## Common Mistakes to Avoid

- Do not start a new branch from old local code. Update `main` first.
- Do not commit directly on `main`. Make a branch for every task.
- Do not reuse an old branch for a different change. Create a fresh branch each time.
- Do not merge without checking the Vercel preview.
- Do not panic if you forgot something. Make another commit on the same branch and push again before merge.

## Done Means Done

Your task is complete when all of this is true:

- you updated local `main` before starting
- you created a new branch
- you committed your changes with a clear message
- you pushed the branch to GitHub
- you opened a pull request
- you checked the Vercel preview
- you merged after everything looked good
