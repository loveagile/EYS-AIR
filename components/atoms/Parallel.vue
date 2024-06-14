<template>
	<div class="flex justify-start items-center">
		<div class="relative text-white px-[9vw] md:px-[45px] py-[1.6vw] md:py-[8px] transform skew-x-[-25deg]"
			:style="{ background: `linear-gradient(to right, ${startColor}, ${endColor})` }">
			<p class="text-[4.8vw] md:text-[24px] transform skew-x-[25deg]">{{ text }}</p>
		</div>
	</div>
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