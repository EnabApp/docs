<template>
    <aside flex="~ col gap-2" w="1/6" py="4">
        <NavItem :item="nav" v-for="nav of navs" :key="nav._path" />
    </aside>
</template>

<script setup>
const props = defineProps(['navs'])
</script>