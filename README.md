# Orange UI

- 这是一个基于 Vue3 / TypeScript / Scss 开发的UI库，涵盖了 Button、Switch ... 等常见 UI 组件。

- 预览地址：https://shyhhh.github.io/Orange-UI-Vue3-simple1.0/

## 使用方法
### 安装
在项目中，使用终端执行以下命令
```
npm install orange-ui
```
或者
```
yarn add orange-ui
```
### 引入
```
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "orange-ui";
//若发现样式不生效，可手动引入scss
import "orange-ui/dist/lib/orange.css";
```
### 示例
```
<template>
  <Button>按钮</Button>
</template>
<script>
  import {Button, Tabs, Tab, Switch, Dialog. openDialog} from "orange-ui";
  export default {
    components: {Button, Tabs, Tab, Switch, Dialog, openDialog}
  }
</script>
```
