<template>
    <header flex="~" items="center" border="b w-10" p="lg:y-4" mb="2px">
        <NuxtLink to="/" decoration="none" cursor="pointer" un-text="white 2xl" flex="~ basis-1/3 gap-2" items="center">
            <IconsEnab w="10" h="10" />
            <span font="semibold">Enab Developers</span>
        </NuxtLink>

        <!-- Navigations -->
        <div flex="~ gap-6 basis-1/3" justify="center">
            <ContentNavigation v-slot="{ navigation }">
                <div v-for="link of navigation" :key="link._path">
                    <NuxtLink
                        :class="[ link._path == ('/' + firstSlug) ? 'text-info-200' : 'text-w-40 hover:text-info-200' ]"
                        font="semibold"
                        w="full"
                        h="full"
                        decoration="none"
                        :key="link._path"
                        :to="chooseLink(link)"
                    >
                        {{ link.title }}
                    </NuxtLink>
                </div>
            </ContentNavigation>
        </div>


        <div flex="~ basis-1/3" justify="end">
            <!-- <span>Social Media</span> -->
            <a href="https://github.com/EnabApp/docs" target="_blank" h="7" w="7" un-text="secondary hover:primary" class="i-fa-brands-discord"></a>
        </div>
    </header>
</template>

<script setup>
const route = useRoute
const currentRoute = await route()
const firstSlug = computed( () => currentRoute.params.slug[0] || "")
const chooseLink = (link) => {
    // Has children
    if (link.children?.length > 0){
        // First child has children 
        if (link.children[0].children?.length > 0){
            if (link.children[0].children[1]) return link.children[0].children[1]._path
            else return link.children[0].children[0]._path
        } else  return link.children[0]._path
    } else return link._path
}
</script>