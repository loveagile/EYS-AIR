<template>
	<AtomsCard
		class="flex flex-col items-center pt-[7vw] md:pt-[35px] rounded-[5vw] md:rounded-[10px] mt-[3vw] md:mt-[15px]">
		<h4 class="text-[#55CCAA] text-[5.4vw] md:text-[27px] font-medium">{{ step }}</h4>
		<p class="text-center text-smsub md:text-sub mt-[4vw] md:mt-[20px]" v-html="tit"></p>
		<div class="w-[11vw] md:w-[55px] border-b-[0.6vw] md:border-b-[3px] border-solid my-[4.6vw] md:my-[23px]"></div>
		<p class="text-center text-smbase md:text-base" v-html="desc"></p>
		<AtomsCard class="mt-[4vw] md:mt-[20px]">
			<NuxtImg :src="img" loading="lazy" class="w-[37vw] md:w-[185px] h-[53vw] md:h-[265px]" alt="step-img" />
		</AtomsCard>
	</AtomsCard>
</template>

<script>
export default {
	props: [
		'step',
		'tit',
		'desc',
		'img',
	]
}
</script>

<style scoped></style>