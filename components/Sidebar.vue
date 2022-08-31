<template>
    <div>
        <ClientOnly>
            <aside v-if="cond()" position="absolute lg:relative" z="10" bg="black lg:transparent" flex="~ col gap-3" h="full lg:auto" w="full lg:1/5" py="4">
                <NavItem :item="nav" v-for="nav of navs" :key="nav._path" />
            </aside>
        </ClientOnly>
    </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const props = defineProps(['navs'])
const [mobileMenuState, mobileMenuToggle] = useToggle(false)

const breakpoints = useBreakpoints(breakpointsTailwind)

const notMobile = breakpoints.isGreater('lg')
const isMobile = computed( () => !notMobile)

const mobileSidebar = useMobileSidebar()

const cond = () => {
    if (notMobile) return true
    else {
        if (mobileSidebar.value) return true
        else return false
    }
}
</script>