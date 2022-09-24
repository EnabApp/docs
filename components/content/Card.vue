<template>
    <div flex="~ col gap-2" :class="styleColor" border="~ w-5 rounded-lg" p="x-8 y-6">
       <component v-if="icon" w="10" h="10" :is="icon" />
       <span v-if="title" un-text="xl" font="bold">{{ title }}</span>
       <p un-text="" m="0"><slot /></p>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'icon', 'color'])
const styleColor = computed( () => {
    switch (props.color){
        case 'success':
            return 'text-white bg-gradient-to-r from-success-600 to-success-700 bg-opacity-35'
        case 'error':
            return 'text-error-200 bg-gradient-to-r from-error-600 to-error-700 bg-opacity-35'
        case 'warning':
            return 'text-warning-200 bg-gradient-to-r from-warning-600 to-warning-700 bg-opacity-35'
        case 'info':
            return 'text-info-200 bg-gradient-to-r from-info-600 to-info-700 bg-opacity-35'
        default:
            return 'bg-w-5 text-white'
    }
})
</script>

