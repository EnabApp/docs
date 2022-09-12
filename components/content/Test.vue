<template>
    <div v-if="button == 'color'" p="x-3 y-8" border="secondaryOp dashed 2px rounded-xl" flex="~ gap-4" justify="center">
         <UiButton color="primary" >primary</UiButton>
         <UiButton color="info" >info</UiButton>
         <UiButton color="success" >success</UiButton>
         <UiButton color="warning" >warning</UiButton>
         <UiButton color="error" >error</UiButton>
    </div>
</template>
<script setup>
const props = defineProps(['button'])
</script>