# Git 移除大文件的方法详解

在使用 Git 过程中，如果不小心将 **大文件**（例如 `.zip`、`.mp4`、`node_modules/`）加入了版本库，可能会导致仓库体积过大，甚至推送失败。本文介绍几种常见场景下的解决方案。

---

## 1. 未提交前移除大文件

如果你只是执行了 `git add`，但还没提交，可以直接撤销缓存：

```bash
git reset HEAD bigfile.zip
```

这会把文件从暂存区移除，但本地文件仍然保留。
为了避免再次误添加，可以将文件写入 `.gitignore`：

```gitignore
*.zip
*.mp4
node_modules/
```

---

## 2. 已经 commit 但未推送远程

如果你已经提交了大文件（`git commit`），但还没推送到远程，可以使用以下方法安全移除。

### 移除单个文件

```bash
git rm --cached bigfile.zip
git commit --amend
```

* `--cached` 表示只从 Git 仓库移除，不删除本地文件
* `--amend` 用来修改上一次提交，替换掉包含大文件的提交

### 移除整个文件夹

```bash
git rm -r --cached bigfolder/
git commit --amend
```

---

## 3. 已经推送到远程

如果包含大文件的 commit 已经推送到远程，就需要「重写历史」来彻底移除。

### 方法一：使用 `git filter-repo`（推荐）

```bash
git filter-repo --path-glob '*.zip' --invert-paths
```

* 会从整个历史中移除所有 `.zip` 文件
* 速度快，安全性比 `git filter-branch` 和 BFG 更高

安装 `git filter-repo`：

```bash
pip install git-filter-repo
```

### 方法二：使用 BFG Repo-Cleaner

如果不能安装 `git filter-repo`，可以用 [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)：

```bash
bfg --delete-files '*.zip'
```

---

## 4. 最佳实践：防止大文件进入 Git

为了避免后续麻烦，可以在项目中添加 `.gitignore` 文件，并在本地配置 Git 大文件管理（Git LFS）。

### 使用 `.gitignore`

```gitignore
# 忽略常见大文件
*.zip
*.tar.gz
*.mp4
node_modules/
```

### 使用 Git LFS（适合必须版本化的大文件）

```bash
git lfs install
git lfs track "*.zip"
git add .gitattributes
git commit -m "Use Git LFS for large files"
```

---

## 总结

* **未提交前**：`git reset HEAD file`
* **已提交未推送**：`git rm --cached file && git commit --amend`
* **已推送远程**：使用 `git filter-repo` 或 `BFG` 清理历史
* **长期方案**：配置 `.gitignore` 或 Git LFS

这样，就能高效、安全地管理 Git 仓库中的大文件。
