<template>
    <div w="full">
      <ContentDoc v-slot="{ doc }">
        <ClientOnly>
          <template #not-found>
            <IconLoading w="20" h="20" />
          </template>
          <div v-if="$route.path !== '/'">
            <h1 un-text="4xl white" mt="5">{{ doc.title }}</h1>
            <p un-text="w-70" leading="1.5rem" mt="3" v-html="doc.description"></p>
            <hr border="0 b-1 w-5" m="t-8 b-10" />
          </div>
          <ContentRenderer class="prose prose-gray dark:prose-invert max-w-none" w="full" :value="doc">
            <template #empty>
              <div flex="~ col" align="center">
                <h1 class="text-2xl">
                  الصفحة غير موجودة!
                </h1>
                <NuxtLink to="/" class="text-2xl" color="secondary">الصفحة الرئيسيّة</NuxtLink>
              </div>
            </template>
          </ContentRenderer>
        </ClientOnly>
      </ContentDoc>
      <br />
    </div>
</template>

