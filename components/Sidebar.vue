<template>
    <div>
        <ClientOnly>
            <aside v-if="notMobile" flex="col gap-3" w="1/5" py="4">
                <NavItem :item="nav" v-for="nav of navs" :key="nav._path" />
            </aside>
            <aside position="absolute" v-else>
                qwdqw
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

</script>