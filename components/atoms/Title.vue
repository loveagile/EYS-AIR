<template>
	<div class="flex flex-col justify-center items-center relative">
		<div class="text-white px-[8vw] md:px-[40px] py-[2.4vw] md:py-[12px] transform skew-x-[-25deg]"
			:style="{ background: `linear-gradient(45deg, ${startColor}, ${endColor})` }">
			<p class="text-[3.8vw] text-center md:text-[19px] leading-[5vw] md:leading-[25px] transform skew-x-[25deg]"
				v-html="text">
			</p>
		</div>
		<div class="arrow absolute h-[2vw] md:h-[10px] w-[4vw] md:w-[20px]"
			:style="{ background: `linear-gradient(45deg, ${startColor}, ${endColor})` }"></div>
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
.arrow {
	clip-path: polygon(50% 100%, 100% 0%, 0% 0%);
	top: 100%;
}
</style>