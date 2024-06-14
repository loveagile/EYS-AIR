<template>
	<p class="inline-block relative text-white px-[1.5vw] md:px-[6px] rounded-full text-[2.6vw] md:text-[13px]"
		:style="{ background: `linear-gradient(to right, ${startColor}, ${endColor})` }">{{ text }}</p>
</template>

<script>
export default {
	props: [
		'text',
		'startColor',
		'endColor'
	]
}
</script>

<style scoped></style>