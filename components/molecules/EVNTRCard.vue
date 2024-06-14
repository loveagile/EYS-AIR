<template>
	<div class="flex flex-col justify-between items-center">
		<AtomsCard class="flex flex-col rounded-[10px]">
			<NuxtImg :src="img" loading="lazy" class="w-[29.4vw] md:w-[147px] h-[21vw] md:h-[105px]" alt="evntr-card" />
			<p class="text-[2.6vw] md:text-[13px] py-[2vw] md:py-[10px]" v-if="tit">{{ tit }}</p>
		</AtomsCard>
	</div>
</template>

<script>
export default {
	props: [
		"img",
		"tit",
	]
}
</script>