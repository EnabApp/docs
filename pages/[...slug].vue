<template>
    <div w="full">
      <ContentDoc class="prose prose-gray dark:prose-invert max-w-none" w="full">
          <template #not-found>
              <div flex="~ col" align="center">
                <h1 class="text-2xl">
                  الصفحة غير موجودة!
                </h1>
                <NuxtLink to="/" class="text-2xl" color="secondary">الصفحة الرئيسيّة</NuxtLink>
              </div>
          </template>
      </ContentDoc>
    </div>
</template>

