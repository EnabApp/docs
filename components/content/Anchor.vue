<template>
    <a :href="href" decoration="none" un-text="secondary hover:primary">
        <slot />
    </a>
</template>

<script setup>
const props = defineProps(['href'])
</script>