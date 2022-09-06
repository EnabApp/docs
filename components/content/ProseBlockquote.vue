<template>
    <div position="relative" font="italic" ml="1" pl="4" class="group">
        <div>
            <slot />
        </div>
        <div position="absolute" top="0" left="0" rounded="~" h="full" transition="all duration-150 ease-in-out" w="4px group-hover:full" bg="primary opacity-10"></div>
    </div>
</template>