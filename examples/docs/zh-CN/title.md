# ui-button

## 概述

ui-button 是按钮组件，触发业务逻辑时使用。

## 安装

```bash
npm i vue-ufp-ui-button
```

## 配置
::: demo 在`ufp-framework.js`文件中添加如下配置

```javascript
module.exports = {
  plugins: [
    ['ui', {
      components: [
        'button'
      ]
    }]
  ]
}
```
:::


## 使用

### 基本样式
::: demo 通过`color`属性可以设置按钮类型

```html
<template>
    <div>
      <cb-titles title="测试title"></cb-titles> 
    </div>
</template>
```
:::
