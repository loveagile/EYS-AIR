<template>
	<NuxtLink :to="linkUrl"
		class="group flex items-center py-[3vw] md:py-[15px] pl-[6.4vw] md:pl-[32px] w-full pr-[3vw] md:pr-[15px] border-[1px] border-[#DDDDDD] bg-white">
		<NuxtImg :src="img" class="w-[6.4vw] md:w-[32px] h-[6.4vw] md:h-[32px] block group-hover:hidden" />
		<NuxtImg :src="hoverImg" class="w-[6.4vw] md:w-[32px] h-[6.4vw] md:h-[32px] hidden group-hover:block" />
		<span class="text-[3.4vw] md:text-[17px] ml-[2vw] md:ml-[10px]">{{ txt }}</span>
		<NuxtImg src="/img/header/arrow.webp"
			class="w-[1.8vw] md:w-[9px] h-[3.6vw] md:h-[18px] ml-auto block group-hover:hidden" />
		<NuxtImg src="/img/header/arrow_hover.webp" width="100%" height="auto"
			class="w-[1.8vw] md:w-[9px] h-[3.6vw] md:h-[18px] ml-auto hidden group-hover:block" />
	</NuxtLink>
</template>

<script>
export default {
	props: [
		'txt',
		'linkUrl',
		'img',
		'hoverImg',
	]
}
</script>

<style scoped>
.group:hover {
	background: linear-gradient(90deg, #659AE2, #77E5FF);
	color: #FFF;
}
</style>