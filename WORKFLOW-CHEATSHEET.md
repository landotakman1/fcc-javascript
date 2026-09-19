# Terminal-first Neovim + Git cheatsheet

WSL Ubuntu on Windows. Work in `~/` not `/mnt/c`. `Esc` = Normal mode.
Repo: `~/fcc-javascript`

## The FCC lab loop

```bash
mkdir -p labs/lab-name
nvim labs/lab-name/script.js
```

In Neovim: `Space r` runs Node. `:%y` copies the file. `Ctrl+V` into FCC.

```bash
git add labs/lab-name
git commit -m "Complete lab: lab-name"
git push
```

## Create a new repo

```bash
mkdir project && cd project
git init
nvim README.md          # Esc  :wq
git add .
git commit -m "Initial commit"
gh auth status
gh repo create NAME --public --source=. --remote=origin --push
```

Use `--private` instead of `--public` if you want it hidden.

## Clone

```bash
gh repo clone user/repo
# or
git clone https://github.com/user/repo.git
cd repo
```

## Everyday git

| Command | What |
|---|---|
| `git status` | What changed? Use constantly |
| `git diff` | Unstaged edits |
| `git add file` / `git add .` | Stage one file / everything |
| `git restore file` | Throw away unstaged edits |
| `git restore --staged file` | Unstage, keep edits |
| `git commit -m "message"` | Snapshot |
| `git log --oneline` | History |
| `git push` | Upload |
| `git pull` | Download + merge |
| `git remote -v` | Where is origin? |

You do **not** need branches for FCC labs. Commit to `main`.

## Neovim modes

`Esc` Normal · `i`/`a` insert · `I`/`A` start/end of line · `o`/`O` new line · `v`/`V` visual · `:` commands

### Leave / save
`:w` save · `:q` quit · `:wq` or `ZZ` save+quit · `:q!` quit no save · `:e file.js` open · `:Tutor` lesson

### Move
`hjkl` · `w b e` words · `0 ^ $` line · `gg G 12G` file/line · `12j 5k` counted · `f( F" t,` find/till · `; ,` repeat · `%` match pair · `* #` same word

### Edit = operator + motion
`dd cc yy` line · `dw cw yw` word · `diw ciw` inner word · `ci" di( yi{` inside pair · `p P` paste · `.` repeat · `u` undo · `Ctrl-r` redo

### Your keymaps
`Space r` save + `node %` · `:%y` yank file to Windows clipboard · `Esc` also clears search highlight

## Files from the shell

`ls` `pwd` `cd ~/fcc-javascript` `cd ..` `mkdir -p a/b` `rm file` `rm -r folder` `mv old new` `cp a b` `node file.js`

## When something explodes

1. Neovim: `u` then `:q!` if needed
2. Git: `git status` first
3. Wrecked uncommitted file: `git restore file`
4. Push rejected: `git pull` then `git push`
5. `git add origin URL` is wrong → `git remote add origin URL`
6. `gh auth login` will not open a WSL browser → use https://github.com/login/device
7. Empty `:Tutor`: `sudo apt install --reinstall neovim neovim-runtime`

Pattern: **operator + motion**. `ci"` = change inside quotes.
Git pattern: **status → add → commit → push**.
