<template>
    <h1 p="6 lg:0" my="lg:10" un-text="white" font="bold">Powerful Features</h1>
    <div p="6 lg:0" grid="~ cols-1 lg:cols-3 gap-6">
        <Card 
            title="Bring you happiness"
            icon="i-material-symbols-add-reaction-rounded"
         v-for="item in 6" :key="item">
            Bring you happiness wherever you are.
         </Card>
    </div>
</template>