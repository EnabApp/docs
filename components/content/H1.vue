<template>
  <h1 :id="id" flex="~ gap-4" mt="4" w="fit" items="center">
    <a @click="copy()" ref="el" color="#fff" font="bold" decoration="none" :href="`#${id}`">
      <slot />
    </a>
  </h1>
</template>

<script setup>
defineProps(['id'])
const el = ref(null)
const router = useRouter()

const copy = () =>{
    navigator.clipboard.writeText(`${window.location.origin + window.location.pathname + el.value.getAttribute('href')}`)
}

</script>