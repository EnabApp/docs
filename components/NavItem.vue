<template>
    <div>
        <div py="1" cursor="pointer" flex="~" justify="between" items="center" un-text="secondaryOp hover:secondary" font="bold" @click="showToggle()">
            <span un-text="white lg">{{ item.title }}</span>
            <IconsExpanded v-if="show" />
            <IconsExpand v-else />
        </div>
        <div v-if="item.children && show" border="l gray-800" ml="2" flex="~ col" pl="4">
            <div v-for="link of item.children" :key="link._path" flex="~">
                <NuxtLink
                    :class="[ link._path == $route.href ? 'text-primary' : 'text-gray-500 hover:text-primary' ]"
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
const show = ref(false)
const showToggle = () => show.value = !show.value

</script>