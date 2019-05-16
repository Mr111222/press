# ui-title

## 概述

ui-title 是按钮组件，触发业务逻辑时使用。

## 安装

```bash
npm i vue-ufp-ui-title
```

## 配置
::: demo 在`ufp-framework.js`文件中添加如下配置

```javascript
module.exports = {
  plugins: [
    ['ui', {
      components: [
        'title'
      ]
    }]
  ]
}
```
:::





## 使用
::: demo 示例
```html
<template>
  <div>
    <cb-titles
      title="我是一级标题"
      subtitle="我是二级标题"
      color="#246"
      subcolor="blue"
      size="40px"
      subsize="10px"
      borcolor="white"
      subborcolor="green"
      linkcolor="#f00"
      linksize="5px"
      :links="arrs"
    >
    </cb-titles>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        arrs: [{content:'链接1', to: {name: '/route', parmas: {id: 1}}}, {content:'链接1', to: {name: '/route', parmas: {id: 1}}}]
      }
    }
  }
</script>
<style type="text/css" media="screen" scoped>
  h2{
    margin:0;
  }
</style>
```
:::


## 参数

|属性|说明|类型|默认值
|:----:|:----:|:----:|:----:|
|title|一级标题，可不写根据自己需求|String|-
|subtitle|二级标题，可不写根据自己需求|String|-
|color|一级标题字体颜色设置|String|-
|subcolor|二级标题字体颜色设置|String|#3b3d3e
|size|一级标题字体大小设置|String|-
|subsize|二级标题字体大小设置|String|14px
|borcolor|一级标题边框颜色设置|String|#e6e6e6
|subborcolor|二级标题边框颜色设置|String|#e8313e
|links|一级标题右侧链接，如无需求可不填写|Array|-
|linkcolor|链接字体颜色|String|#1094d0
|linksize|链接字体大小|String|-

