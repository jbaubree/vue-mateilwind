<script setup lang="ts">

const props = withDefaults(defineProps<{
  color?: string
}>(), {
  color: 'white',
})

const colorStyle = computed((): string => `border-top: solid ${props.color}`)
</script>

<template>
  <div
    class="w-5 h-5 animate-spin border border-top rounded-full border-2 border-transparent"
    :style="colorStyle"
  />
</template>
