<template>
    <span bg="w-5" p="y-1 x-2" :class="styleColor" border="rounded" mx="0.5">
        <slot />
    </span>
</template>


<script setup>
const props = defineProps(['color', 'label'])
const styleColor = computed( () => {
    switch (props.color){
        case 'success':
            return 'text-success-200'
        case 'error':
            return 'text-error-400'
        case 'warning':
            return 'text-warning-200'
        case 'info':
            return 'text-info-200'
        default:
            return 'text-white'
    }
})
</script>