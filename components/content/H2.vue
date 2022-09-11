<template>
  <h2 :id="id" flex="~ gap-4" m="t-10" w="fit" class="group" items="center">
    <a @click="copy()" ref="el" color="#fff" transition="~ ease-in-out duration-250" decoration="none" p="y-2 x-4" bg="w-5 hover:w-10" border="~ w-5 rounded-lg hover:w-15" :href="`#${id}`">
      <slot />
    </a>
    <IconsLinkChain text="light" w="6" h="6" class="hidden lg:block invisible group-hover:visible"></IconsLinkChain>
  </h2>
</template>

<script setup>
defineProps(['id'])
const el = ref(null)
const router = useRouter()

const copy = () =>{
    navigator.clipboard.writeText(`${window.location.origin + window.location.pathname + el.value.getAttribute('href')}`)
}

</script>