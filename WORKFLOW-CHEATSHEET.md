# Terminal-first Neovim + Git cheatsheet

Windows (WSL) + Linux laptop. Work in `~/` not `/mnt/c`. `Esc` = Normal mode.
Repo: `~/fcc-javascript` on **both** machines.

## Sit down at a machine (do this first)

```bash
cd ~/fcc-javascript
git pull
```

You have two computers on one repo. `git pull` downloads whatever you pushed from the other one. Skip this and `git push` will fight you.

First time on a **new** machine (clone, don't `git init`):

```bash
cd ~
git clone https://github.com/landotakman1/fcc-javascript.git
cd fcc-javascript
git pull
```

## The FCC lab loop

```bash
cd ~/fcc-javascript
git pull
mkdir -p labs/lab-name
nvim labs/lab-name/script.js
```

In Neovim: `Space r` runs Node. `:%y` copies the file. `Ctrl+V` into FCC.

```bash
git add labs/lab-name
git status          # NOTES.md should NOT be listed
git commit -m "Complete lab: lab-name"
git push
```

`labs/**/NOTES.md` is gitignored. User stories stay on the machine; only your code is pushed.

`mkdir -p` first. `nvim` will not create the lab folder.

## Screen layout

**Desktop (two monitors)**
- Main: cheatsheet PDF left, Neovim right (`Win+Left` / `Win+Right`)
- Right: Grok 1/3, FCC 2/3 - read user stories in the browser
- No `NOTES.md` needed here

**Laptop (one screen)**
- Workspace 1: Neovim (optional `:vsplit NOTES.md`)
- Workspace 2: FCC
- `Super+Page Up` / `Page Down` to flip

## Neovim splits (optional)

| Keys | What |
|---|---|
| `nvim -O sheet.md lab.js` | Two files, vertical split; first file is left |
| `:vsplit file.md` | Split and open that file |
| `Ctrl-w w` | Other pane |
| `Ctrl-w h` / `Ctrl-w l` | Left / right |
| `Ctrl-w r` | Swap panes |
| `Ctrl-w =` | Equal width |
| `Ctrl-w >` / `Ctrl-w <` | This pane wider / narrower |
| `10 Ctrl-w >` | Wider by 10 columns |
| `:q` | Close this pane |
| `:qa` | Close all panes |

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
| `git pull` | Download + merge. First command of the day |
| `git status` | What changed? Use constantly |
| `git diff` | Unstaged edits |
| `git add file` / `git add .` | Stage one file / everything |
| `git restore file` | Throw away unstaged edits |
| `git restore --staged file` | Unstage, keep edits |
| `git commit -m "message"` | Snapshot |
| `git log --oneline` | History |
| `git push` | Upload to GitHub |
| `git remote -v` | Where is origin? |

You do **not** need branches for FCC labs. Commit to `main`.

Two-machine rule: **pull  work  add  commit  push**.

## Neovim modes

`Esc` Normal ú `i`/`a` insert ú `I`/`A` start/end of line ú `o`/`O` new line ú `v`/`V` visual ú `:` commands

### Leave / save
`:w` save ú `:q` quit ú `:wq` or `ZZ` save+quit ú `:q!` quit no save ú `:e file.js` open ú `:Tutor` lesson

### Move
`hjkl` ú `w b e` words ú `0 ^ $` line ú `gg G 12G` file/line ú `12j 5k` counted ú `f( F" t,` find/till ú `; ,` repeat ú `%` match pair ú `* #` same word

### Edit = operator + motion
`dd cc yy` line ú `dw cw yw` word ú `diw ciw` inner word ú `ci" di( yi{` inside pair ú `p P` paste ú `.` repeat ú `u` undo ú `Ctrl-r` redo

### Your keymaps
`Space r` save + `node %` ú `:%y` yank file to clipboard ú `K` hover docs ú `Esc` also clears search highlight

## Files from the shell

`ls` `pwd` `cd ~/fcc-javascript` `cd ..` `mkdir -p a/b` `rm file` `rm -r folder` `mv old new` `cp a b` `node file.js`

## When something explodes

1. Neovim: `u` then `:q!` if needed
2. Git: `git status` first
3. Wrecked uncommitted file: `git restore file`
4. Push rejected: `git pull` then `git push`
5. `git add origin URL` is wrong  `git remote add origin URL`
6. `gh auth login` will not open a WSL browser  use https://github.com/login/device
7. Empty `:Tutor`: `sudo apt install --reinstall neovim neovim-runtime`

Pattern: **operator + motion**. `ci"` = change inside quotes.
Git pattern: **pull  status  add  commit  push**.
