<template>
    <div>
        <div py="1" mb="2" cursor="pointer" flex="~" justify="between" items="center" un-text="secondaryOp hover:secondary" font="semibold" @click="showToggle()">
            <span un-text="white">{{  item.title  }}</span>
            <IconsExpanded v-if="show" />
            <IconsExpand v-else />
        </div>
        <div v-if="item.children && show" flex="~ col" ml="2">
            <div v-for="link of item.children" :key="link._path">
                <div v-if="link._path.split('/').length > 3" :class="[link._path == $route.href ? 'border-l border-info-200' : 'border-l border-w-15']" pl="4" py="1.5" flex="~">
                    <NuxtLink :class="[link._path == $route.href ? 'text-info-200' : 'text-w-50 hover:text-info-200']" un-text="sm" w="full" h="full" decoration="none" :key="link._path" :to="link._path">
                        {{  link.title  }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['item'])
const route = useRoute()
const show = ref(false)
const showToggle = () => show.value = !show.value

props.item.children.find(({ _path }) => _path == route.href)
    ? show.value = true
    : show.value = false

</script>