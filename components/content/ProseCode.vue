<template>
    <div class="group" position="relative" :class="{ 'pt-8': filename || language }" bg="w-10" m="t-5 b-10" dir="ltr" text="left" border="~ w-10 rounded-lg">
        <ClientOnly>
            <div v-if="filename || language" flex="~ gap-2" items="center" position="absolute" left="5" top="2.5" text="xs white">
                <span v-if="filename" bg="w-5" p="y-1 x-2"  border="~ w-5 rounded">
                    {{ filename }}
                </span>
                <span v-if="language" bg="w-5" p="y-1 x-2"  border="~ w-5 rounded">
                    {{ language }}
                </span>
                <span @click="copy()" text="lg" class="invisible group-hover:visible" cursor="pointer" bg="w-5 hover:opacity-10" p="y-1 x-2"  border="~ w-5 hover:w-10 rounded" flex="~" items="center">
                    <div v-if="copied" class="i-fa6-solid-clipboard-check"></div>
                    <div v-else class="i-fa6-solid-clipboard"></div>
                </span>
            </div>
            <div un-text="md white" flex="~" items="center">
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
    min-height: 19px;
}


.prose :where(code):not(:where(.not-prose,.not-prose *)){
    color: rgb(255, 255, 255);
}

</style>