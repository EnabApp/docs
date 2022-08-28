<template>
    <div>
        <div py="1" cursor="pointer" flex="~" justify="between" items="center" un-text="secondaryOp hover:secondary" font="bold" @click="showToggle()">
            <span un-text="white lg">{{ item.title }}</span>
            <IconsExpanded v-if="show" />
            <IconsExpand v-else />
        </div>
        <div v-if="item.children && show" border="l w-15" ml="2" flex="~ col gap-2" pl="4">
            <div v-for="link of item.children" :key="link._path" flex="~">
                <NuxtLink
                    :class="[ link._path == $route.href ? 'text-primary' : 'text-w-50 hover:text-primary' ]"
                    font="semibold"
                    w="full"
                    h="full"
                    decoration="none"
                    :key="link._path"
                    :to="link._path"
                >
                {{ link.title }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['item'])
const route = useRoute()
const show = ref(false)
const showToggle = () => show.value = !show.value

onMounted(() => {
    props.item.children.find(({ _path }) => _path == route.href)
        ? show.value = true
        : show.value = false
})


</script>