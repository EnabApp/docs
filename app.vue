<template>
  <main class="px-1 mx-auto max-w-full lg:max-w-7xl lg:px-6" h="screen">
    <Header :hasNavigations="sidebarNavigations?.length > 0" />
    <div flex="~ gap-4" justify="between" position="relative" class="h-[calc(100vh-75px)]">
      <Sidebar v-if="sidebarNavigations" :navs="sidebarNavigations" />
      <div flex="grow" px="6 lg:10" mb="0 lg:10" overflow="y-scroll">
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


table {
  border-collapse: separate !important;
  border-spacing: 5px 0px !important;
}

th {
  background-color: rgba(255,255,255, 0.05);
  border-radius: 0.25rem;
  text-transform: capitalize;
}
tr:nth-child(even) {
  background-color: transparent!important;
}

th, td {
  border: 0 !important;
}

body {
  background-color: rgb(12, 12, 13);
  color: #333;
}

code span {
  user-select: all;
  cursor: pointer;
}

</style>