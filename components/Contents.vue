<template>
    <aside flex="col gap-2" w="1/4" py="4" class="hidden lg:flex" overflow="y-scroll">
        <ClientOnly>
            <span font="bold" un-text="xl white" mb="3">Table of Contents</span>
            <div flex="~ col gap-3">
                <div v-for="element in contents" :key="element.id">
                    <a v-if="element.tag == 'h1'" :href="`#${element.id}`" decoration="none" font="bold" un-text="w-80 hover:primary" class="group my-4">
                        {{  element.title  }}
                    </a>
                    <a v-if="element.tag == 'h2'" :href="`#${element.id}`" decoration="none" un-text="sm w-50 hover:primary" class="group">
                        <span un-text="w-10 group-hover:w-50">#</span> {{  element.title  }}
                    </a>
                </div>
            </div>
        </ClientOnly>
    </aside>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const route = useRoute()

const contentQuery = ref(null)
const contents = ref(null)

const getContents = async (r) => {
    if (r?.params?.slug?.length > 0) {
        const { data } = await useAsyncData('contents-' + r?.params?.slug?.join('-'), () => queryContent(...r.params.slug).findOne())
        contents.value = data.value?.excerpt?.children.filter(({ tag }) => tag == 'h2' || tag == 'h1').map(
            (element) => {
                return {
                    title: element.children[0].value,
                    id: element.props.id,
                    tag: element.tag
                }
            }
        )
    }
}

getContents(route)

watch(() => route, (r) => getContents(r), { deep: true })


const breakpoints = useBreakpoints(breakpointsTailwind)

const notMobile = breakpoints.isGreater('lg')
const isMobile = computed(() => !notMobile)



</script>