<template>
    <div class="command" flex="~" items="start" justify="between" position="relative" bg="w-10" p="x-4 y-4" m="t-5 b-10" dir="ltr" text="lg left" border="~ w-10 rounded-lg">
        <div flex="~ col">
            <div v-for="command in allCommands" flex="~ gap-1" items="center">
                <div class="i-ic-outline-keyboard-arrow-right" text="w-20" w="8" h="8"></div>
                <div class="command text-white">
                    {{ command }}
                </div>
            </div>
        </div>
        <span bg="w-5" p="y-1 x-2" text="xs" border="~ w-5 rounded">
            {{ language }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps(['language', 'commands'])
const allCommands = computed(() => props.commands.split('|'))
</script>

<style scoped>
.command{
    font-family: Consolas, "Courier New", monospace !important;
    font-size: 14px;
    line-height: 19px;
}
</style>