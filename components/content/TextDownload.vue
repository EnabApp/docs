<template>
    <ProseCode :language="extension" :filename="filename" :url="url" :code="data">
        <div v-html="highlighted" w="full"></div>
    </ProseCode>
</template>
<script setup>
import { getHighlighter } from 'shiki-es'
const props = defineProps(['url'])
const { data } = await useAsyncData(props.url, () => $fetch(props.url))
const filenameWithExtension = props.url.split('/').pop()
const filename = filenameWithExtension.split('.').slice(0, -1).join('.')
const fixExtension = (ext) => {
    switch(ext){
        case 'yml':
            return 'yaml'
        default:
            return ext
    }
}
const extension = fixExtension(filenameWithExtension.split('.').pop())

const highlighter = await getHighlighter({ theme: 'material-palenight',  })
const highlighted = highlighter.codeToHtml(data.value, { lang: extension })
</script>

<style>
pre code .line {
    display: block;
    line-height: 19px;

}

.shiki {
    background-color: transparent !important;
}

.shiki span {
    font-family: Consolas, "Courier New", monospace !important;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0px;
}
pre code .line span {
font-family: Consolas, "Courier New", monospace !important;
    font-size: 14px;
    line-height: 19px;
}

.prose :where(pre):not(:where(.not-prose,.not-prose *)){
    margin: 0 0;
    line-height: 0;
}
</style>