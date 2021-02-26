---
title: 去除windows桌面图标小箭头
categories:
    - windows
thumbnail: https://i.picsum.photos/id/54/1200/700.jpg
---

> 有点 强迫症， 看着玩意特别痛苦

![](https://cdn.jsdelivr.net/gh/im/oss@master/notes/images/2020/05/27/remove-windows-arrow.b6801c7f.jpg)

## 去除：

```bash
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,197" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```



## 恢复：

```bash
reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```