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
                        :class="[ link._path == ('/' + firstSlug) ? 'text-white' : 'text-secondaryOp' ]"
                        font="semibold"
                        w="full"
                        h="full"
                        un-text="lg"
                        decoration="none"
                        :key="link._path"
                        :to="link._path"
                    >
                        {{ link.title }}
                    </NuxtLink>
                </div>
            </ContentNavigation>
        </div>


        <div flex="~ basis-1/3" justify="end">
            <span>Social Media</span>
        </div>
    </header>
</template>

<script setup>
const route = useRoute
const currentRoute = await route()
const firstSlug = computed( () => currentRoute.params.slug[0] || "")
</script>