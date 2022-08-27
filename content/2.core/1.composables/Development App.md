---
title: Development App
---

# Development App

## Instructions
1. Make new app component at `playground/components`. E.g. `playground/components/TestApp.vue`. Be sure it has the basic structure as below:
2. Make new app component at `playground/components`. E.g. `playground/components/TestApp.vue`. Be sure it has the basic structure as below:
```js
<template>
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
      Hello
    </UiDesktopWindow>
  </Transition>
</template>
<script setup>
    const props = defineProps({ app: Object });
</script>
```
3. Register your app inside `playground/app.vue` using the code below:
```js
import { useAppManager } from '#imports';
const appManager = useAppManager()
const myApp = {
  "name": "TestApp",
  "title": "my test app",
  "icon": "i-ri-todo-fill",
  "size": "min-w-[350px] min-h-[550px] max-w-[350px] max-h-[550px]",
}
appManager.addApp(myApp)
```
3.  Be sure you have the code below inside `playground/nuxt.config.ts`:
```js
components: { global: true, dirs: [ '~/components' ]}
```

## Note
Development app will not be published with your package. It is only for development purpose.