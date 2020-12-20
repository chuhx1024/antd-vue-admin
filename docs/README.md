# 文档

## Init project
```sh
Vue CLI v4.5.9
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```
## 自定义特殊的 eslint 规则
- 本项目使用 VueCLI 的 默认 standard 规则 加自定义  详见 eslintrc.js
- 运行 yarn lint 修复

## 项目引入 normalize.css()
- 作用
    - [Normalize.css 样式作用，及使用方法](https://www.cnblogs.com/ympjsc/p/12309784.html)
- 使用
    ```sh
    yarn add normalize.css
    ```
    ```js
    // 在 main.js 中引入
    import Vue from 'vue'
    import 'normalize.css/normalize.css' // A modern alternative to CSS resets
    ```