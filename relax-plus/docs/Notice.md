---
title: Notice 通知
tag: Feedback
---

# Notice 通知
> 全局展示通知提醒信息

## 普通通知
> 最简单的用法，`4.5` 秒后自动关闭。
:::demo `notice` 会被挂载在 `vue` 全局属性中, 当然也可以引入 `RelaxPlus` 直接使用
```html
<template>
   <x-button type='primary' @click="handerClick">显示普通提示</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $notice({
          title: 'Notice 通知',
          content: '全新的 Notice 通知组件，对比老版本动画更加流畅，细腻，柔和，加入进度条倒计时指示，根本停不下来，太酷了'
        })
      }
      return {
        handerClick
      }
    }
  }
</script>
```
:::


## 通知类型
> 不同的提示状态：信息、成功、警告、错误
:::demo
```html
<template>
   <x-button @click="open1">打开通知提示</x-button>
   <x-button @click="open2">显示成功提示</x-button>
   <x-button @click="open3">显示警告提示</x-button>
   <x-button @click="open4">显示错误提示</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties

      const open1 = () => {
        $notice.info({
          title: 'Notice 通知',
          content: '全新的 Notice 通知组件，对比老版本动画更加流畅，细腻，柔和，加入进度条倒计时指示，根本停不下来，太酷了'
        })
      }
      const open2 = () => {
        $notice.success({
          title: 'Notice 通知',
          content: '全新的 Notice 通知组件，对比老版本动画更加流畅，细腻，柔和，加入进度条倒计时指示，根本停不下来，太酷了'
        })
      }
      const open3 = () => {
        $notice.warning({
          title: 'Notice 通知',
          content: '全新的 Notice 通知组件，对比老版本动画更加流畅，细腻，柔和，加入进度条倒计时指示，根本停不下来，太酷了'
        })
      }
      const open4 = () => {
        $notice.error({
          title: 'Notice 通知',
          content: '全新的 Notice 通知组件，对比老版本动画更加流畅，细腻，柔和，加入进度条倒计时指示，根本停不下来，太酷了'
        })
      }

      return {
        open1,
        open2,
        open3,
        open4,
      }
    }
  }
</script>
```
:::

## 手动关闭
> 自定义时长，为 `0` 则不自动关闭
:::demo
```html
<template>
   <x-button @click="handerClick">手动关闭</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $notice.success({
          title: 'Notice 通知',
          content: '全新的 Notice 通知组件，对比老版本动画更加流畅，细腻，柔和，加入进度条倒计时指示，根本停不下来，太酷了',
          duration: 0
        })
      }
      return {
        handerClick
      }
    }
  }
</script>
```
:::


## 仅显示标题
> title 为必填项
:::demo
```html
<template>
   <x-button @click="handerClick">打开提醒(仅标题)</x-button>
</template>

<script>
  import {getCurrentInstance} from 'vue'
  export default {
    setup(){
      const instance = getCurrentInstance()
      const {$notice} = instance.appContext.config.globalProperties
      const handerClick = () => {
        $notice.warning({
          title: '10秒后自动关闭',
          duration: 10
        })
      }
      return {
        handerClick
      }
    }
  }
</script>
```
:::