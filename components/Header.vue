<template>
    <div flex="~ col" border="b w-10" p="y-4 x-4 lg:x-0" mb="2px">
        <header flex="~" justify="between lg:initial" items="center">
            <NuxtLink to="/" decoration="none" cursor="pointer" un-text="white xl lg:2xl" flex="~ basis-2/3 lg:basis-1/3 gap-2" items="center">
                <IconsEnab w="10" h="10" />
                <span font="semibold">Enab Developers</span>
            </NuxtLink>
    
            <!-- Navigations -->
            <div class="hidden lg:flex" flex="gap-6 basis-1/3" justify="center">
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
    
    
            <div class="hidden lg:flex" flex="basis-1/3 gap-4" justify="end">
                <a href="https://discord.gg/5hR4d77E" target="_blank" h="7" w="7" un-text="secondary hover:primary" class="i-fa-brands-discord"></a>
                <a href="https://github.com/EnabApp/docs" target="_blank" h="7" w="7" un-text="secondary hover:primary" class="i-mdi-github"></a>
            </div>
    
    
    
            <!-- Mobile Customization -->
            <div class="flex gap-3 lg:hidden" justify="end">
                <div v-if="hasNavigations" @click="toggleMobileSidebar()" h="8" w="8" un-text="secondary active:primary hover:primary" class="i-ri-menu-fold-fill"></div>
                <div @click="mobileMenuToggle()" h="8" w="8" un-text="secondary active:primary hover:primary" class="i-ri-menu-line"></div>
            </div>
    
            
        </header>

        <!-- Navigations -->
        <Transition>
            <div v-if="mobileMenuState" class="flex lg:hidden" flex="gap-6 col" my="4" justify="center" items="center">
                <ContentNavigation v-slot="{ navigation }">
                    <div v-for="link of navigation" :key="link._path + '-mobile'">
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
                <a href="https://discord.gg/5hR4d77E" target="_blank" h="10" w="10" un-text="secondary hover:primary" class="i-fa-brands-discord"></a>
                <a href="https://github.com/EnabApp/docs" target="_blank" h="10" w="10" un-text="secondary hover:primary" class="i-mdi-github"></a>
            </div>
        </Transition>

    </div>
</template>

<script setup>
const props = defineProps(['hasNavigations'])
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

const [mobileMenuState, mobileMenuToggle] = useToggle(false)

const mobileSidebar = useMobileSidebar()
const toggleMobileSidebar = () => {
    mobileSidebar.value = !mobileSidebar.value
}
</script>

<style scoped>
.v-enter-active {
  transition: all 0.2s ease-out;
}

.v-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>