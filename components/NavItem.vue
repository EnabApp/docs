<template>
    <div>
        <div py="1" cursor="pointer" flex="~" justify="between" items="center" un-text="secondaryOp hover:secondary" font="bold" @click="showToggle()">
            <span un-text="white lg">{{ item.title }}</span>
            <IconsExpanded v-if="show" />
            <IconsExpand v-else />
        </div>
        <div v-if="item.children && show" flex="~ col" ml="2">
            <div
                v-for="link of item.children"
                :class="[ link._path == $route.href ? 'border-l border-info-200' : 'border-l border-w-15' ]"
                pl="4"
                py="0.5"
                :key="link._path" flex="~">
                <NuxtLink
                    :class="[ link._path == $route.href ? 'text-info-200' : 'text-w-50 hover:text-info-200' ]"
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
    console.log(show.value)
})


</script>