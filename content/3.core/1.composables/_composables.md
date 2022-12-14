---
title: All Composables
description: some description
---

## How To
```
import { useComposableName } from '#imports`
const composableName = useComposableName()
```

## 1. useAppManager
```js
getters: {
    // Apps ( Please look at the app model for more details )
    getApps: [], // get all apps
    getApp: fn (id), // get app by id
    getRunningApps:[], // get all running apps,
    getOwned:[], // get all owned apps,
    getCoreApps: [], // get all core apps
    getFocused: App, // get focused app,
    getDevelopmentApps: [], // get all development apps

    // Services ( Please look at the service model for more details )
    getServices: [], // get all services
    getServiceById: fn(id), // get service by id
    getOwnedServices: [], // get all owned services
    getUnownedServices: [], // get all unowned services

    anyRunningIsMaximized: boolean // boolean if any app is maximized,
}

actions: {
    setFocus: fn (id) // set focused app,
    addApp: fn(app) // add app to app manager,
    async fetch: fn() // fetch all apps and it's services,
    async buyApp: fn(app_id) // buy app with app id
    async buyService: fn(service_id) // buy service with service id
},
```

## 2. useUserProfile
```js
getters: {
  getProfile: Object, // User Profile
  getUsername: String, // User Profile Username
}

actions: {
  async fetch: fn(), // Refresh or Load user profile 
  async updateUsername: fn(username), // Update username
  async updateProfile: fn({}), // Update profile (assign in object contains columns as keys e.g. { username: 'something', ... })
  async logout: fn(), // Logout
}
```

## 3. useNotifications
```js
getters: {
  getNotifications: state => state.notifications
}

actions: {
  async fetch: fn(), // Refresh or Load notifications (already called no need to initiate it) 
  async sendNotification: fn(Notification),
  // type Notification = {
  //    user_id: String,
  //    app_id: Number,
  //    datas: Object,
  //    message: String,
  //    title: String,
  //    dates: Date,
  // }
}
```


## 4. useBreakpointWindow
```js
// Define ref="windowRef" property on your window/element component.
const windowRef = ref(null)
const {
        // Size returns string of current window size         breakpoint e.g. 'xs' or 'sm' or 'md' or 'lg' or 'xl' you can also choose one or multiple of the following:
        size,
        twoXs,
        xs,
        sm,
        md,
        lg,
        xl,
        twoXl
      } = useBreakpointWindow(windowRef)
```