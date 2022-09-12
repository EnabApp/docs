<template>
    <div v-if="button =='color'" flex="~ gap-4" justify="center">
         <UiButton color="primary" >primary</UiButton>
         <UiButton color="info" >info</UiButton>
         <UiButton color="success" >success</UiButton>
         <UiButton color="warning" >warning</UiButton>
         <UiButton color="error" >error</UiButton>
    </div>
    <div v-if="button =='outline'" flex="~ gap-4" justify="center">
         <UiButton color="primary" :outline="true" >primary</UiButton>
         <UiButton color="info" :outline="true" >info</UiButton>
         <UiButton color="success" :outline="true" >success</UiButton>
         <UiButton color="warning" :outline="true" >warning</UiButton>
         <UiButton color="error" :outline="true" >error</UiButton>
    </div>
    <div v-if="button =='to'" flex="~" justify="center">
         <UiButton color="info" to="https://enab.app/" >Enab App</UiButton>
    </div>

</template>
<script setup>
const props = defineProps(['button'])
</script>