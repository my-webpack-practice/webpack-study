# 嵩恒前端 CLI

针对公司业务使用`webpack4.x`和`babel7.x`整理的一个主要针对 H5 页面开发的脚手架，如果 PC 项目对 IE 兼容要求不高，也可以使用。

## 特点

- 支持代码合并压缩、图片压缩、图片 base64、autoprefixer、代码版本控制；
- 支持 es6、sass；
- 支持热更新、tree-shaking 等；
- 支持 eslint 代码校验、prettier 代码风格；
- 支持业务代码和公共代码、webpack 运行时代码分离（最大化的利用浏览器缓存）；
- 支持开发、预发布、上线环境分离。

## 使用方法

```bash
# 将项目clone下来
git clone http://codeio.dftoutiao.com/RESEARCH/shfe-cli.git my-project
cd my-project

# 切换到对应的脚手架分支
# 如果是单页应用：
git checkout -b spa origin/spa
# 如果是多页应用：
git checkout -b mpa origin/mpa

# 删除.git文件
rm -rf .git
# 重新git初始化、添加、提交代码
git init
git add .
git commit -m 'init'
# 添加远程新项目仓库地址
git remote add origin <新项目仓库地址>
# 提交代码
git push -u origin master
```

### SPA

单页面 CLI 请切换分支到`spa`，点击查看：[SPA](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/src/spa)

### MPA

多页面 CLI 请切换分支到`mpa`，点击查看：[MPA](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/src/mpa)

## 问题反馈

[提工单（issue）](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/issues/new) 或 [提合并请求（PR）](http://codeio.dftoutiao.com/RESEARCH/shfe-cli/pulls)
