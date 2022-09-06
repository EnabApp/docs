<template>
    <div class="group" position="relative" :class="{ 'pt-8': filename || language }" bg="w-5" m="t-5 b-10" dir="ltr" text="left" border="~ w-10 rounded-lg">
        <ClientOnly>
            <div v-if="filename || language" flex="~ gap-2" items="center" position="absolute" left="5" top="2.5" text="xs white">
                <a v-if="url && filename" decoration="none" un-text="white" :href="url" bg="w-5 hover:opacity-10" p="y-1 x-2"  border="~ w-5 hover:w-10 rounded">
                    {{ filename }}
                </a>
                <span v-if="filename && !url" bg="w-5" p="y-1 x-2"  border="~ w-5 rounded">
                    {{ filename }}
                </span>
                <span v-if="language" bg="w-5" p="y-1 x-2"  border="~ w-5 rounded">
                    {{ language }}
                </span>
                <span @click="previewToggle()" v-if="language == 'html' && !code.includes('<!---->')"  w="4" h="4" cursor="pointer" :class="[ previewState ? 'bg-w-20 hover:bg-opacity-30' : 'bg-w-5 hover:bg-opacity-10']" p="y-1 x-2"  border="~ w-5 hover:w-10 rounded" flex="~" justify="center" items="center">
                    <IconsEyeOff v-if="previewState" ></IconsEyeOff>
                    <IconsEyeOn v-else ></IconsEyeOn>
                </span>
                <span @click="copy()" w="2" h="4" class="invisible group-hover:visible" cursor="pointer" bg="w-5 hover:opacity-10" p="y-1 x-2"  border="~ w-5 hover:w-10 rounded" flex="~" items="center">
                    <IconsClipboardCheck v-if="copied" class="i-fa6-solid-clipboard-check"></IconsClipboardCheck>
                    <IconsClipboard v-else class="i-fa6-solid-clipboard"></IconsClipboard>
                </span>
            </div>
            <div un-text="md white" p="6" flex="~ col" items="start">
                <div v-if="previewState && (language == 'html')"
                    bg="primary"
                    p="4"
                    border="rounded-lg"
                    flex="~ col"
                >
                    <component :is="parsedCode" />
                </div>
                <slot v-else />
            </div>
        </ClientOnly>
    </div>
</template>


<script setup>
const props = defineProps(['filename', 'language', 'code', 'highlights', 'url', 'color'])
const copy = () => {
    navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
};
const copied = ref(false)

const [ previewState, previewToggle ] = useToggle(false)

const parsedCode = {
  template: props.code
}
</script>


<style>
pre, pre code{
    width: 100%;
    padding: 0 !important;
}
pre code .line {
    display: block;
    min-height: 19px;
    width: 100%;
}

pre code .highlight {
    background-color: rgba(255,255,255, 0.05);
    padding: 0.25rem 0;
    margin: 0.25rem 0;
    border-radius: 0.25rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    /* border: 1px solid rgba(255,255,255, 0.05); */
}
pre code .highlight:hover {
    background-color: rgba(255,255,255, 0.075);
    /* border: 1px solid rgba(255,255,255, 0.1); */
}


.prose :where(code):not(:where(.not-prose,.not-prose *)){
    color: rgb(255, 255, 255);
}

</style>