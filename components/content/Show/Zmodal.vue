<template>
  <div>
    <UiButton @click="stateModal = true">Show Modal</UiButton>
  <Teleport to="body">
    <UiModal v-model="stateModal" @cancel="modalCanceled">
        <template #title> Title </template>
      <div>body</div>
    </UiModal>
  </Teleport>
  </div>
</template>

<script setup>
const [stateModal, toggleModal] = useToggle(false);

const modalCanceled = () => {
  console.log("Canceled");
  stateModal.value = false;
};
</script>
