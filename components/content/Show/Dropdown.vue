<template>
  <UiDropdown
    :list="[
      { id: 1, value: 'John' },
      { id: 2, value: 'Jane' },
    ]"
    label="Select One"
    placeholder="Type to search"
    icon="IconEnab"
    multiple
  >
    <UiButton>Save</UiButton>
  </UiDropdown>
</template>
