<template>
    <aside flex="~ col gap-2" w="1/4" py="4"  overflow="y-scroll">
        <span font="bold" un-text="xl white" mb="3">Table of Contents</span>
        <ClientOnly>
            <div>
                <div v-for="element in contents" :key="element.id">
                    <a v-if="element.tag == 'h1'" :href="`#${element.id}`" decoration="none" font="bold" un-text="w-80 hover:primary" class="group">
                        {{ element.title }}
                    </a>
                    <a v-if="element.tag == 'h2'" :href="`#${element.id}`" decoration="none" un-text="w-50 hover:primary" class="group">
                        <span un-text="w-10 group-hover:w-50">#</span> {{ element.title }}
                    </a>
                </div>
            </div>
        </ClientOnly>
    </aside>
</template>

<script setup>
const route = useRoute()

const contentQuery = ref(null)
const contents = ref(null)

const getContents = async (r) => {
    const { data } = await useAsyncData('contents-' + r.params.slug?.join('-'), () => queryContent(...r.params.slug).findOne())
    contents.value = data.value.excerpt?.children.filter(({ tag }) => tag == 'h2' || tag == 'h1').map(
        (element) => {
            return {
                title: element.children[0].value,
                id: element.props.id,
                tag: element.tag
            }
        }
    )
}

getContents(route)

watch (() => route, (r) => getContents(r), {deep: true})




</script>