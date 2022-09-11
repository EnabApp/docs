<template>
  <h5 :id="id" flex="~ gap-4" mt="5" w="fit" class="group" items="center">
    <a @click="copy()" ref="el" color="#fff" decoration="none" p="y-2" :href="`#${id}`">
      <slot />
    </a>
    <IconsLinkChain text="light" w="6" h="6" class="hidden lg:block invisible group-hover:visible"></IconsLinkChain>
  </h5>
</template>

<script setup>
defineProps(['id'])
const el = ref(null)
const router = useRouter()

const copy = () =>{
    navigator.clipboard.writeText(`${window.location.origin + window.location.pathname + el.value.getAttribute('href')}`)
}

</script>