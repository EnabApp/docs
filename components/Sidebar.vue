<template>
    <ClientOnly>
        <div h="full lg:auto" min-w="full lg:200px" v-if="cond" z="10" bg="black lg:transparent" position="absolute lg:relative">
            <aside flex="~ col gap-3" px="6 lg:0" py="6 lg:4">
                <NavItem :item="nav" v-for="nav of navs" :key="nav._path" />
            </aside>
        </div>
    </ClientOnly>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const props = defineProps(['navs'])
const [mobileMenuState, mobileMenuToggle] = useToggle(false)

const breakpoints = useBreakpoints(breakpointsTailwind)

const notMobile = breakpoints.isGreater('lg')
const isMobile = computed( () => !notMobile)

const mobileSidebar = useMobileSidebar()
const toggleMobileSidebar = () => {
    mobileSidebar.value = !mobileSidebar.value
}

const cond = computed(() => {
    if (notMobile) return true
    else {
        if (mobileSidebar.value) return true
        else return false
    }
})
</script>