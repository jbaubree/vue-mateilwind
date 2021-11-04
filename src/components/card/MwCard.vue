<template>
  <div class="min-w-full rounded bg-white shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-5 text-center">
        <slot name="title" />
      </div>
      <p class="text-gray-700">
        <slot />
      </p>
    </div>
  </div>
</template>
