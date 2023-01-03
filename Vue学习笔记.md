## Vue 学习笔记

### npm 配置阿里云提供的中国镜像

```shell
# 查看 npm 镜像来源
npm config get registry
# 默认的镜像地址：https://registry.npmjs.org/
# 设置为阿里云提供的中国镜像
npm config set registry https://registry.npmmirror.com
```

### 本地安装 Vue-Router4.x 与 Element plus

```shell
# 安装 router4.x，官网：https://router.vuejs.org/zh/
npm install vue-router -S
# 安装 Element plus
npm install element-plus --save
# 引入 Element-Plus，main.js 里引入
```

### 项目里引入 Vue-Router4.x 与 Element plus

```js
// main.js 里引入
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// 引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 注册 Element 所有图标
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
// 注册 Element 所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
```

