<template>
    <h1 my="10" un-text="white" font="bold">Powerful Features</h1>
    <div grid="~ cols-3 gap-6">
        <Card v-for="item in 6" :key="item" />
    </div>
</template>