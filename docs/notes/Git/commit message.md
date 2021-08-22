# 如何书写 commit message



## Commitizen 一个撰写合格 Commit message 的工具

安装命令如下:

```shell
$ npm install -g commitizen
```

然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式

```shell
$ commitizen init cz-conventional-changelog --save --save-exact
```

>   以后，凡是用到`git commit`命令，一律改为使用`git cz`。这时，就会出现选项，用来生成符合格式的 Commit message。

此部分参考： [Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)



## Commitizen 使用参考文章

https://zhuanlan.zhihu.com/p/132348944

https://juejin.cn/post/6844903857718312967

https://segmentfault.com/a/1190000009048911



## [commitlint](https://commitlint.js.org/#/) 的默认格式为：

```
# 注意：冒号前面是需要一个空格的, 带 ？ 表示非必填信息
type(scope?): subject

body?

footer?
```



## 可选 type

| 类型            | 描述                                                         | 实践               |
| --------------- | ------------------------------------------------------------ | ------------------ |
| build           | 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交 |                    |
| ci              | 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交 |                    |
| docs            | 文档更新                                                     |                    |
| feat（feature） | 新增功能                                                     | 添加模块，添加功能 |
| merge           | 分支合并 Merge branch ? of ?                                 |                    |
| fix             | bug 修复                                                     |                    |
| perf            | 性能, 体验优化                                               |                    |
| refactor        | 重构代码(既没有新增功能，也没有修复 bug)                     |                    |
| style           | 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑) | 整理代码           |
| test            | 新增测试用例或是更新现有测试                                 |                    |
| revert          | 回滚某个更早之前的提交                                       |                    |
| chore           | 不属于以上类型的其他类型                                     |                    |

其他个人习惯

| 类型   | 描述             | 实践 |
| ------ | ---------------- | ---- |
| create | 创建文件         |      |
| update | 普通修改文件内容 |      |

