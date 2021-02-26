---
title: tmux
tags:
    - tools
categories:
    - mac os
thumbnail: https://i.picsum.photos/id/32/1200/700.jpg
---



`tmux（terminal multiplexer）`是Linux上的终端复用神器，可从一个屏幕上管理多个终端（准确说是伪终端）。使用该工具，用户可以连接或断开会话，而保持终端在后台运行。

<!--more-->

## 安装

```shell
brew install tmux
```



## tmux 结构

![img](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/tmux.3a0b3e47.png)


## tmux快捷键前缀（prefix）
为了使自身的快捷键和其他软件的快捷键互不干扰，tmux 提供了一个快捷键前缀。当想要使用快捷键时，需要先按下快捷键前缀，然后再按下快捷键。tmux 所使用的快捷键前缀默认是组合键 Ctrl + b（同时按下 Ctrl 键和 b 键）。例如，假如你想通过快捷键列出当前 tmux 中的会话（对应的快捷键是 s），那么你只需要做以下几步：

按下组合键 Ctrl + b (tmux 快捷键前缀)
放开组合键 Ctrl + b
再按下 s 键




## 快捷键配置

快捷键可以自定义，比如将前缀改为Ctrl+a，按如下所示修改~/.tmux.conf文件， 如果没有 `.tmux.conf` 就创建一个

```shell
set-option -g prefix C-a
unbind-key C-b
bind-key C-a send-prefix
bind-key R source-file ~/.tmux.conf \; display-message "~/.tmux.conf reloaded."
```



## 快捷键

<span class="vp-primary-text">前缀 `prefix = Ctrl + b` 或者是你自定义其他的快捷键</span>  
<span class="vp-danger-text">注意：是按下快捷键前缀之后 再按下对应的组合键， 不是同事按下哦！~~</span>



## 会话管理



### 命令

tmux `new`　　创建会话

tmux `new -s mysession`　　创建名为mysession的会话

tmux `ls`　　显示会话列表

tmux `a`　　连接上一个会话

tmux `a -t mysession`　　连接指定会话

tmux `rename -t s1 s2`　　重命名会话s1为s2

tmux `kill-session`　　关闭上次打开的会话

tmux `kill-session -t s1`　　关闭会话s1

tmux `kill-session -a -t s1`　　关闭除s1外的所有会话

tmux `kill-server`　　关闭所有会话



### 快捷键

prefix `s`　　列出会话，可进行切换

prefix `$`　　重命名会话

prefix `d`　　分离当前会话

prefix `D`　　分离指定会话



### 窗口管理

prefix `c`　　创建一个新窗口

prefix `,`　　重命名当前窗口

prefix `w`　　列出所有窗口，可进行切换

prefix `n`　　进入下一个窗口

prefix `p`　　进入上一个窗口

prefix `l`　　进入之前操作的窗口

prefix `0~9`　　选择编号0~9对应的窗口

prefix `.`　　修改当前窗口索引编号

prefix `'`　　切换至指定编号（可大于9）的窗口

prefix `f`　　根据显示的内容搜索窗格

prefix `&`　　关闭当前窗口



### 窗格管理

prefix `%`　　水平方向创建窗格

prefix `"`　　垂直方向创建窗格

prefix `Up|Down|Left|Right`　　根据箭头方向切换窗格

prefix `q`　　显示窗格编号

prefix `o`　　顺时针切换窗格

prefix `}`　　与下一个窗格交换位置

prefix `{`　　与上一个窗格交换位置

prefix `x`　　关闭当前窗格

prefix `space(空格键)`　　重新排列当前窗口下的所有窗格

prefix `!`　　将当前窗格置于新窗口

prefix `Ctrl+o`　　逆时针旋转当前窗口的窗格

prefix `t`　　在当前窗格显示时间

prefix `z`　　放大当前窗格(再次按下将还原)

prefix `i`　　显示当前窗格信息



### 其他命令

tmux `list-key`　　列出所有绑定的键，等同于prefix ?

tmux `list-command`　　列出所有命令
