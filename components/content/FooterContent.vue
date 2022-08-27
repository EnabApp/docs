<template>
    <div mt="20" p="x-4 y-8" flex="~" justify="between" border="t w-10">
        <div flex="~ gap-1" items="center">
            <IconsEnabSecondary w="10" h="10" />
            <span un-text="#666 2xl" font="bold">Powered by Enab</span>
        </div>
        <div>
            <span un-text="#666 sm">
                copyright © {{ new Date().getFullYear() }} Enab
            </span>
        </div>
        
    </div>
</template>