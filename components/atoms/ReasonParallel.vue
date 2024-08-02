<template>
	<div class="flex justify-start items-center">
		<div class="relative text-white px-[5vw] md:px-[25px] py-[0.8vw] md:py-[4px] transform skew-x-[-25deg]"
			:style="{ background: `linear-gradient(to right, ${startColor}, ${endColor})` }">
			<p class="text-smbase md:text-base transform skew-x-[25deg]">{{ text }}</p>
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