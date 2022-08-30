<template>
  <main class="px-1 mx-auto max-w-7xl sm:px-3 lg:px-6" h="screen">
    <Header />
    <div flex="~ gap-4" h="cuts">
      <Sidebar v-if="sidebarNavigations" :navs="sidebarNavigations" />
      <div :class="[ sidebarNavigations ? 'flex basis-3/4' : 'flex w-full' ]"  px="10" mb="10" overflow="y-scroll">
        <NuxtPage />
      </div>
      
      <Contents v-if="sidebarNavigations" :navs="sidebarNavigations" />
    </div>
  </main>
</template>


<script setup>
const route = useRoute
const currentRoute = await route()

// Getting all navigations
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

// Getting current page navigations
const sidebarNavigations = computed(() => navigation.value.find(({ _path }) => _path === `/${currentRoute.params.slug[0]}`)?.children)

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
</style>