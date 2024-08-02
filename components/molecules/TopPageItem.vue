<template>
	<div class="relative">
		<NuxtImg :src="mainImg" loading="lazy" class="w-[95%] h-[64vw] md:h-[320px]" alt="pagination-main" />
		<div class="flex flex-col items-end absolute right-0 top-[90%]">
			<AtomsCard class="relative w-[95%] rounded[4vw] md:rounded-[20px]">
				<div
					class="flex flex-col px-[3vw] md:px-[15px] py-[4vw] md:py-[20px] pr-[34vw] md:pr-[170px] text-smsub md:text-sub rounded[4vw] md:rounded-[20px]">
					<p>{{ text }}</p>
					<span class="text-[#DDDDDD] text-end font-apple text-smlarge md:text-large">{{ nameEn }}</span>
					<span class="text-smbase md:text-base">{{ nameJp }}</span>
					<span class="text-smmini md:text-mini">{{ details }}</span>
				</div>
				<NuxtImg :src="relImg" loading="lazy"
					class="absolute right-[4vw] md:right-[20px] w-[30vw] md:w-[150px] h-[76vw] md:h-[380px] translate-y-[-50%] top-[50%]"
					alt="rel-img" />
			</AtomsCard>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'mainImg',
		'relImg',
		'text',
		'nameEn',
		'nameJp',
		'details',
	]
}
</script>