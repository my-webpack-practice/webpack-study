
# SPA

基于 webpack 的单页面应用框架

## 特点

- 支持代码合并压缩
- 业务代码和公共代码、webpack 运行时代码分离（最大化的利用浏览器缓存）
- 开发、预发布、上线环境分离
- 支持使用 es6（babel）、支持 sass
- 支持热更新、tree-shaking、autoprefixer、图片 base64 等
- 支持 eslint 代码校验、prettier 代码风格

## 使用说明

```bash
# 开发
npm run dev # 或 npm start

# 预发布（用于上测试服）打包
npm run pre

# 上线打包
npm run build
# 上线打包可视化分析
npm run builda

# 代码格式校验
npm run lint

# 代码格式自动修复
npm run fix
```

## 目录结构说明

```bash
.
├── .eslintrc.js  # eslint配置文件
├── .prettierrc.js  # prettier配置文件
├── build # webpack配置文件目录
│   ├── config.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── dist # 上线打包目录
├── pre # 预发布打包目录
└── src # 源码目录
    ├── api # 接口处理目录（代码组织方式供参考）
    │   ├── config.js
    │   ├── data.js
    │   ├── index.js
    │   └── log.js
    ├── common  # 公共目录
    │   ├── css
    │   │   ├── _base.scss
    │   │   ├── _common.scss
    │   │   ├── _index.scss
    │   │   └── _mixin.scss
    │   └── js
    │       ├── SL-es.js
    │       ├── SLAPP-es.js
    │       └── responsive.js
    ├── css # 页面css
    │   └── index.scss
    ├── img # 图片
    ├── index.html  # 入口页面
    └── js  # 业务js目录（代码组织方式供参考）
        ├── index.js
        ├── math.js
        └── print.js
```

## 贡献

如发现有 bug 或有更好的 idea，欢迎提 PR。
