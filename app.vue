<template>
  <main class="px-1 mx-auto max-w-7xl sm:px-3 lg:px-6" h="screen">
    <Header />
    <div flex="~ gap-4" h="cuts">
      <Sidebar v-if="sidebarNavigations" :navs="sidebarNavigations" />

      <div flex="~ grow" px="6">
        <NuxtPage />
      </div>
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