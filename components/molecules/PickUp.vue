<template>
	<h4 class="text-[4.6vw] md:text-[23px] font-medium mt-[6vw] md:mt-[30px]">{{ tit }}</h4>
	<div class="flex flex-row w-full justify-start my-[4vw] md:my-[20px]">
		<NuxtImg :src="avatar" loading="lazy" class="w-[10vw] md:w-[50px] h-[10vw] md:h-[50px]" alt="avatar" />
		<div class="flex flex-col justify-center ml-[4vw] md:ml-[20px] text-smmini md:text-mini">
			<span class="font-extrabold font-avenir" :style="{ color: `${color}` }">EVNTR</span>
			<span>{{ school }}</span>
		</div>
	</div>
	<p class="text-smmini md:text-mini tracking-[-0.2vw] md:tracking-[-1px]">{{ desc }}</p>
	<div class="flex justify-start items-center w-full mt-[6vw] md:mt-[30px]">
		<NuxtImg src="/img/yen.webp" loading="lazy" class="w-[4vw] md:w-[20px] h-[4vw] md:h-[20px]" alt="yen" />
		<span class="ml-[2vw] md:ml-[10px] text-smbase md:text-base">{{ price }}</span>
	</div>
	<AtomsRoundButton :startColor="startColor" :endColor="endColor" :linkUrl="linkUrl" />
</template>

<script>

export default {
	props: [
		'tit',
		'avatar',
		'color',
		'school',
		'desc',
		'price',
		'startColor',
		'endColor',
		'linkUrl',
	]
}
</script>

<style scoped></style>