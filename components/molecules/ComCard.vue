<template>
	<div class="flex flex-col justify-between items-center">
		<AtomsCard class="flex flex-col rounded-[10px]">
			<NuxtImg :src="img" loading="lazy" class="w-[45.4vw] md:w-[227px] h-[68vw] md:h-[340px]" alt="com-card" />
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