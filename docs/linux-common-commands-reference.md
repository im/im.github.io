 # Linux 常用命令参考手册

本文档汇总了 Linux 系统中日常操作常用命令，包括文件操作、权限管理、查看文件信息、移动复制删除、查找文件等。

---

## 1. **文件与目录查看**

| 命令     | 功能                                 | 示例               |
| -------- | ------------------------------------ | ------------------ |
| `ls`     | 列出目录内容                         | `ls`               |
| `ls -l`  | 列出详细信息，包括权限、拥有者、大小 | `ls -l /home/user` |
| `ls -a`  | 显示隐藏文件（以 `.` 开头）          | `ls -a`            |
| `ls -lh` | 显示人类可读大小                     | `ls -lh`           |
| `tree`   | 以树状结构显示目录                   | `tree /home/user`  |

---

## 2. **文件/目录操作**

| 命令       | 功能                  | 示例                      |
| ---------- | --------------------- | ------------------------- |
| `cd`       | 切换目录              | `cd /home/user`           |
| `pwd`      | 显示当前目录          | `pwd`                     |
| `mkdir`    | 创建目录              | `mkdir new_folder`        |
| `mkdir -p` | 递归创建多级目录      | `mkdir -p dir1/dir2/dir3` |
| `rm`       | 删除文件              | `rm file.txt`             |
| `rm -r`    | 删除目录及其内容      | `rm -r old_folder`        |
| `touch`    | 创建空文件            | `touch file.txt`          |
| `cp`       | 复制文件              | `cp file1.txt file2.txt`  |
| `cp -r`    | 递归复制目录          | `cp -r folder1 folder2`   |
| `mv`       | 移动或重命名文件/目录 | `mv file.txt /tmp/`       |

---

## 3. **文件权限管理**

| 命令             | 功能           | 示例                             |
| ---------------- | -------------- | -------------------------------- |
| `ls -l`          | 查看权限       | `ls -l file.txt`                 |
| `chmod`          | 修改文件权限   | `chmod 755 file.sh`              |
| `chmod` 符号方式 | 添加或移除权限 | `chmod u+x script.sh`            |
| `chown`          | 修改文件拥有者 | `sudo chown user file.txt`       |
| `chown` 修改组   | 修改文件所属组 | `sudo chown :group file.txt`     |
| `chown` 同时修改 | 修改拥有者和组 | `sudo chown user:group file.txt` |

**权限数字对应关系**：

| 数字 | 权限 | 含义     |
| ---- | ---- | -------- |
| 7    | rwx  | 读写执行 |
| 6    | rw-  | 读写     |
| 5    | r-x  | 读执行   |
| 4    | r--  | 只读     |
| 0    | ---  | 无权限   |

**权限可视化示意图**：

```text
文件类型与权限表示：
-rwxr-xr-- 1 user group 1024 Aug 13 16:00 file.txt
| |  |  |  |
| |  |  |  └─ 其他用户权限: r-- (只读)
| |  |  └─ 同组权限: r-x (读+执行)
| |  └─ 拥有者权限: rwx (读+写+执行)
| └─ 文件类型: - (普通文件)
└─ 符号占位

权限数字对应图：
数字  权限
7      rwx
6      rw-
5      r-x
4      r--
0      ---
````

---

## 4. **查看文件内容**

| 命令      | 功能                   | 示例                      |
| --------- | ---------------------- | ------------------------- |
| `cat`     | 查看文件全部内容       | `cat file.txt`            |
| `less`    | 分页查看文件           | `less file.txt`           |
| `more`    | 分页查看文件           | `more file.txt`           |
| `head`    | 查看前 N 行            | `head -n 10 file.txt`     |
| `tail`    | 查看后 N 行            | `tail -n 10 file.txt`     |
| `tail -f` | 实时跟踪文件新增内容   | `tail -f /var/log/syslog` |
| `wc`      | 统计行数、字数、字符数 | `wc -l file.txt`          |

---

## 5. **查找文件与文本**

| 命令       | 功能                           | 示例                       |
| ---------- | ------------------------------ | -------------------------- |
| `find`     | 查找文件或目录                 | `find /home -name "*.txt"` |
| `grep`     | 搜索文本内容                   | `grep "hello" file.txt`    |
| `grep -r`  | 递归搜索目录                   | `grep -r "TODO" ./project` |
| `locate`   | 快速查找文件（需先更新数据库） | `locate file.txt`          |
| `updatedb` | 更新 `locate` 数据库           | `sudo updatedb`            |

---

## 6. **压缩与解压**

| 命令        | 功能                | 示例                               |
| ----------- | ------------------- | ---------------------------------- |
| `tar`       | 打包                | `tar -cvf archive.tar folder/`     |
| `tar -xvf`  | 解包                | `tar -xvf archive.tar`             |
| `tar -czvf` | 打包并 gzip 压缩    | `tar -czvf archive.tar.gz folder/` |
| `tar -xzvf` | 解压 `.tar.gz` 文件 | `tar -xzvf archive.tar.gz`         |
| `zip`       | 压缩为 zip 文件     | `zip -r archive.zip folder/`       |
| `unzip`     | 解压 zip 文件       | `unzip archive.zip`                |

---

## 7. **移动与复制操作示意图**

```text
复制文件:
source.txt
   |
   v
cp source.txt /path/to/destination/

移动文件/重命名:
source.txt
   |
   v
mv source.txt /path/to/destination/
mv oldname.txt newname.txt

复制/移动目录（递归）:
folder1/
   |
   v
cp -r folder1/ folder2/
mv folder1/ /path/to/destination/
```

---

## 8. **系统与进程管理**

| 命令      | 功能                     | 示例             |
| --------- | ------------------------ | ---------------- |
| `ps`      | 查看当前进程             | `ps aux`         |
| `top`     | 实时显示进程信息         | `top`            |
| `htop`    | 图形化进程管理（需安装） | `htop`           |
| `kill`    | 杀死进程                 | `kill PID`       |
| `kill -9` | 强制杀死进程             | `kill -9 PID`    |
| `df`      | 查看磁盘使用情况         | `df -h`          |
| `du`      | 查看目录或文件大小       | `du -sh folder/` |

---

## 9. **用户与权限管理**

| 命令     | 功能             | 示例              |
| -------- | ---------------- | ----------------- |
| `whoami` | 查看当前用户     | `whoami`          |
| `id`     | 查看用户和组信息 | `id`              |
| `groups` | 查看用户所属组   | `groups`          |
| `sudo`   | 提升权限执行命令 | `sudo apt update` |

---

## 10. **网络相关**

| 命令            | 功能                                       | 示例                         |
| --------------- | ------------------------------------------ | ---------------------------- |
| `ping`          | 测试网络连通性                             | `ping www.baidu.com`         |
| `ifconfig`      | 查看网络接口信息（部分系统已被 `ip` 替代） | `ifconfig`                   |
| `ip addr`       | 查看 IP 地址                               | `ip addr`                    |
| `netstat -tuln` | 查看端口占用                               | `netstat -tuln`              |
| `curl`          | 获取网页内容                               | `curl https://www.baidu.com` |

---

## 11. **其他实用命令**

| 命令      | 功能             | 示例                |
| --------- | ---------------- | ------------------- |
| `date`    | 查看当前时间     | `date`              |
| `uptime`  | 查看系统运行时间 | `uptime`            |
| `history` | 查看命令历史     | `history`           |
| `clear`   | 清屏             | `clear`             |
| `alias`   | 命令别名         | `alias ll='ls -lh'` |

---

> **提示**：Linux 命令大多数都有帮助文档，可以用 `man 命令名` 查看详细用法，如：
>
> ```bash
> man ls
> man chmod
> ```
