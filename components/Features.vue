<template>
    <h1 p="6 lg:0" my="lg:10" un-text="white" font="bold">Powerful Features</h1>
    <div p="6 lg:0" grid="~ cols-1 lg:cols-3 gap-6">
        <Card 
            :title="item.title"
            :icon="item.icon"
         v-for="item in features" :key="item.title">
            {{ item.description }}
         </Card>
    </div>
</template>

<script setup>
    const features = ref([
        {
            title: "One Minute to Start",
            description: "You can start with a simple template or with a custom one.",
            icon: "i-material-symbols-timer-off-outline-rounded"
        },
        {
            title: "Easy to Use",
            description: "Easy to use Enab with the best web technologies.",
            icon: "i-icon-park-outline-easy"
        },
        {
            title: "Simple to Maintain",
            description: "You can easily update your app with the latest version of Enab.",
            icon: "i-material-symbols-rocket-launch-outline"
        },
        {
            title: "Wonderful Components",
            description: "We have created a beautiful UI with many components.",
            icon: "i-bx-bxs-component"
        },
        {
            title: "Powerful Customization",
            description: "You can easy custom your app with a highly customizable functions.",
            icon: "i-material-symbols-settings-input-component-outline"
        },
        {
            title: "Powerful API",
            description: "You can use your own API to connect your app with your own backend.",
            icon: "i-file-icons-api-blueprint"
        }
    ])
</script>