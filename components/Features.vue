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
            icon: "IconTimerOff"
        },
        {
            title: "Easy to Use",
            description: "Easy to use Enab with the best web technologies.",
            icon: "IconFingerTip"
        },
        {
            title: "Simple to Maintain",
            description: "You can easily update your app with the latest version of Enab.",
            icon: "IconRocketLanuch"
        },
        {
            title: "Wonderful Components",
            description: "We have created a beautiful UI with many components.",
            icon: "IconComponents"
        },
        {
            title: "Powerful Customization",
            description: "You can easy custom your app with a highly customizable functions.",
            icon: "IconSettingsInput"
        },
        {
            title: "Powerful API",
            description: "You can use your own API to connect your app with your own backend.",
            icon: "IconFileAplBluePrint"
        }
    ])
</script>