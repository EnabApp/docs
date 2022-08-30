<template>
    <div flex="~ col gap-2" :class="styleColor" border="~ w-5 rounded-lg" p="x-8 y-6">
       <div v-if="icon" w="10" h="10" :class="[icon]"></div>
       <span v-if="title" un-text="xl" font="bold">{{ title }}</span>
       <p un-text="" m="0"><slot /></p>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'icon', 'color'])
const styleColor = computed( () => {
    switch (props.color){
        case 'success':
            return 'text-white bg-success-600 bg-opacity-15'
        case 'error':
            return 'text-error bg-error-600 bg-opacity-15'
        case 'warning':
            return 'text-warning bg-warning-600 bg-opacity-15'
        case 'info':
            return 'text-info bg-info-600 bg-opacity-15'
        default:
            return 'bg-w-5 text-white'
    }
})
</script>

