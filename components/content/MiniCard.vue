<template>
    <div flex="~ gap-2" my="6" justify="between" :class="styleColor" border="~ w-10 rounded-2xl" p="x-4 y-4">
        <span font="500">{{ title }}</span>
        <div v-if="icon" w="10" h="10" :class="icon"></div>
    </div>
</template>


<script setup>
    const props = defineProps(['icon', 'color', "title"])
    const styleColor = computed( () => {
        switch (props.color){
            case 'success':
                return 'text-success-200 bg-success-600 bg-opacity-15'
            case 'error':
                return 'text-error-200 bg-error-600 bg-opacity-15'
            case 'warning':
                return 'text-warning-200 bg-warning-600 bg-opacity-15'
            case 'info':
                return 'text-info-200 bg-info-600 bg-opacity-15'
            default:
                return 'bg-w-5 text-white'
        }
    })
</script>