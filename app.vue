<template>
  <main class="px-1 mx-auto max-w-full lg:max-w-7xl lg:px-6" h="screen">
    <Header />
    <div flex="~ gap-4" position="relative" h="cuts">
      <Sidebar v-if="sidebarNavigations" :navs="sidebarNavigations" />
      <div :class="[
          notMobile
            ? (sidebarNavigations ? 'flex basis-3/4' : 'flex w-full')
            : 'flex w-full'
        ]"  px="10" mb="10" overflow="y-scroll">
        <NuxtPage />
      </div>
      
      <Contents v-if="sidebarNavigations" :navs="sidebarNavigations" />
    </div>
  </main>
</template>


<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const route = useRoute
const currentRoute = await route()

// Getting all navigations
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

// Getting current page navigations
const sidebarNavigations = computed(() => navigation.value.find(({ _path }) => _path === `/${currentRoute.params.slug[0]}`)?.children)


const breakpoints = useBreakpoints(breakpointsTailwind)

const notMobile = breakpoints.isGreater('lg')

</script>


<style>
::-webkit-scrollbar {
  width: 7px;
}
 
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
}
 
::-webkit-scrollbar-thumb {
  background-color: #222;
  /* outline: 1px solid slategrey; */
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #333;
}

.prose{
    color: rgb(171, 178, 191);
}

ul > li {
    list-style-type: none;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
}
ul > li:before {
  content: '•';
  color: rgba(255, 255, 255, 0.2);
  margin-right: 1rem;
  /* margin-left: 1rem; */
}
ol > li {
  margin: 0.2rem 0;
  line-height: 2rem;
}
</style>