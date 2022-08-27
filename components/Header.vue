<template>
    <header flex="~" items="center" border="b gray-900" p="lg:y-4" mb="2px">
        <div flex="~ basis-1/3" items="center">
            <IconsEnab w="10" h="10" />
            <span font="semibold" un-text="secondary 2xl">Enab Developers</span>
        </div>

        <!-- Navigations -->
        <div flex="~ gap-6 basis-1/3" justify="center">
            <ContentNavigation v-slot="{ navigation }">
                <div v-for="link of navigation" :key="link._path">
                    <NuxtLink
                        :class="[ link._path == ('/' + firstSlug) ? 'text-secondary' : 'text-secondaryOp' ]"
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