<template>
    <div>
        <br v-for="i in parseInt(times)" />
    </div>
</template>

<script setup>
const props = defineProps(['times'])
</script>