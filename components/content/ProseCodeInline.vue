<template>
    <span bg="w-10" p="x-2" un-text="sm" :class="styleColor" border="rounded" mx="0.5">
        <slot />
    </span>
</template>


<script setup>
const props = defineProps(['color', 'label'])
const styleColor = computed( () => {
    switch (props.color){
        case 'success':
            return 'text-white'
        case 'error':
            return 'text-error'
        case 'warning':
            return 'text-warning'
        case 'info':
            return 'text-info'
        default:
            return 'text-white'
    }
})
</script>