# WSL 使用笔记

## 文件系统 

### windows 访问wsl系统下的文件

可以在wsl终端输入以下命令：

```shell
explorer.exe .
```

### wsl 系统中访问Windows文件

wsl系统已将Windows的文件系统挂载至根目录的 `mnt` 下。