<template>
	<div class="flex flex-col items-center">
		<AtomsReasonParallel :text="tit" :startColor="startColor" :endColor="endColor" class="relative z-10" />
		<NuxtImg :src="img" loading="lazy"
			class="w-[26vw] md:w-[130px] h-[26vw] md:h-[130px] relative top-[-3vw] md:top-[-15px]" :alt="tit" />
		<div
			class="flex flex-col bg-black text-white rounded-full text-center pb-[0.6vw] md:pb-[3px] px-[3vw] md:px-[15px] relative top-[-6vw] md:top-[-30px]">
			<span class="text-smbase md:text-base">{{ txt }}</span>
			<span class="text-[2.6vw] md:text-[13px]">プレゼント！</span>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'tit',
		'startColor',
		'endColor',
		'img',
		'txt',
	]
}
</script>

<style scoped></style>