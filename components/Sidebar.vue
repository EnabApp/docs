<template>
    <aside flex="~ col gap-3" w="1/5" py="4">
        <NavItem :item="nav" v-for="nav of navs" :key="nav._path" />
    </aside>
</template>

<script setup>
const props = defineProps(['navs'])
</script>