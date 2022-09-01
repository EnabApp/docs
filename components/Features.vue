<template>
    <h1 p="6 lg:0" my="lg:10" un-text="white" font="bold">Powerful Features</h1>
    <div p="6 lg:0" grid="~ cols-1 lg:cols-3 gap-6">
        <Card 
            :title="item.title"
            icon="i-material-symbols-add-reaction-rounded"
         v-for="item in features" :key="item.title">
            {{ item.description }}
         </Card>
    </div>
</template>

<script setup>
    const features = ref([
        {
            title: "Easy to Start",
            description: "Easy to start creating your own app with Enab. You can start with a simple template or with a custom one. You can also use the module-starter template to start a new module/service/app.",
        },
        {
            title: "Easy to Use",
            description: "Easy to use Enab with the best tools and technologies (Nuxt and VueJS) for the web. You can use the same codebase for both web and mobile apps with just a few ready to use tools for responsive.",
        },
        {
            title: "Easy to Maintain",
            description: "Easy to maintain your app with Enab. You can easily update your app with the latest version of Enab and you can easily push your app to production with just a command.",
        },
        {
            title: "Wonderful Components",
            description: "We have created a beautiful user interface for Enab with a lot of components that you can boost your development with.",
        },
        {
            title: "Powerful Customization",
            description: "You can easy custom your app with a highly customizable functions and flexiable Ui.",
        },
        {
            title: "Powerful API",
            description: "You can use our composables to easy add functionalities to your app. You can also use your own API to connect your app with your own backend.",
        }
    ])
</script>