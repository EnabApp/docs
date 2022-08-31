<template>
    <ClientOnly>
        <div h="full lg:auto" v-if="cond()" z="10" bg="black lg:transparent" position="absolute lg:relative" w="full lg:1/5">
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

const notMobile = breakpoints.isGreater('sm')
const isMobile = computed( () => !notMobile)

const mobileSidebar = useMobileSidebar()
const toggleMobileSidebar = () => {
    mobileSidebar.value = !mobileSidebar.value
}

const cond = () => {
    if (notMobile) return true
    else {
        if (mobileSidebar.value) return true
        else return false
    }
}
</script>