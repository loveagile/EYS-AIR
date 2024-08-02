<template>
	<div class="flex justify-center items-center">
		<div class="outline text-white pl-[2.6vw] md:pl-[13px] py-[1vw] md:py-[5px] pr-[4vw] md:pr-[20px]"
			:style="{ background: `linear-gradient(to right, ${startColor}, ${endColor})` }">
			<p class="text-smmini md:text-mini">{{ text }}</p>
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

<style scoped>
.outline {
	clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
}
</style>