<template>
    <h1 my="10" un-text="white" font="bold">Powerful Features</h1>
    <div grid="~ cols-3 gap-6">
        <Card 
            title="Bring you happiness"
            icon="i-material-symbols-add-reaction-rounded"
         v-for="item in 6" :key="item">
            Bring you happiness wherever you are.
         </Card>
    </div>
</template>