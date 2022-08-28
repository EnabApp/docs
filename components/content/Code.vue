<template>
    <div class="group" position="relative" p="" bg="w-5" m="t-5 b-10" dir="ltr" text="left" border="rounded-lg">
        <ClientOnly>
            <div flex="~ gap-4" position="absolute" right="5" top="4" dir="rtl" text="white">
                <span v-if="filename" bg="w-5" p="y-2 x-4"  border="rounded">
                    {{ filename }}
                </span>
                <span v-if="language" bg="w-5" p="y-2 x-5"  border="rounded">
                    {{ language }}
                </span>
                <span @click="copy()" text="xl" class="invisible group-hover:visible" cursor="pointer" bg="w-5 hover:opacity-10" p="y-2 x-4"  border="rounded" flex="~" items="center">
                    <div v-if="copied" class="i-fa6-solid-clipboard-check"></div>
                    <div v-else class="i-fa6-solid-clipboard"></div>
                </span>
            </div>
            <div un-text="xl white" flex="~" items="center">
                <slot />
            </div>
        </ClientOnly>
    </div>
</template>


<script setup>
const props = defineProps(['filename', 'language', 'code'])
const copy = () => {
    navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
};
const copied = ref(false)
</script>


<style>
pre code .line {
  display: block;
  min-height: 2rem;
}

.prose :where(code):not(:where(.not-prose,.not-prose *)){
    color: rgb(255, 255, 255);
}
</style>