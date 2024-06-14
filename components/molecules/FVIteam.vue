<template>
	<div class="flex flex-col items-center">
		<AtomsReasonParallel :text="tit" :startColor="startColor" :endColor="endColor" class="relative z-10" />
		<NuxtImg :src="img" loading="lazy"
			class="w-[27vw] md:w-[135px] h-[27vw] md:h-[135px] relative top-[-3vw] md:top-[-15px]" :alt="tit" />
		<div
			class="flex flex-col bg-black text-white rounded-full text-center py-[0.6vw] md:py-[3px] px-[4vw] md:px-[20px] relative top-[-6vw] md:top-[-30px]">
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