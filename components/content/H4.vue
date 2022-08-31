<template>
  <h4 :id="id" flex="~ gap-4" mt="5" w="fit" class="group" items="center">
    <a @click="copy()" ref="el" color="#fff" decoration="none" p="y-2" :href="`#${id}`">
      <slot />
    </a>
    <div text="light" class="hidden lg:blockinvisible group-hover:visible i-akar-icons-link-chain"></div>
  </h4>
</template>

<script setup>
defineProps(['id'])
const el = ref(null)
const router = useRouter()

const copy = () =>{
    navigator.clipboard.writeText(`${window.location.origin + window.location.pathname + el.value.getAttribute('href')}`)
}

</script>