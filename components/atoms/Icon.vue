<template>
  <div class="flex items-center">
    <NuxtImg :src="img" loading="lazy" class="w-[4vw] md:w-[20px] h-[4vw] md:h-[20px]" alt="icon" />
    <span class="text-smtiny sm:text-tiny ml-[1vw] md:ml-[5px]">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: [
    'img',
    'text',
  ]
}
</script>

<style scoped></style>