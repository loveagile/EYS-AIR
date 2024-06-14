<template>
	<div
		class="group flex items-center py-[3vw] md:py-[15px] pl-[6.4vw] md:pl-[32px] w-full pr-[3vw] md:pr-[15px] border-[1px] border-[#DDDDDD] bg-white hover:cursor-pointer">
		<NuxtImg :src="img" class="w-[6.4vw] md:w-[32px] h-[6.4vw] md:h-[32px] block group-hover:hidden" />
		<NuxtImg :src="hoverImg" class="w-[6.4vw] md:w-[32px] h-[6.4vw] md:h-[32px] hidden group-hover:block" />
		<span class="text-[3.4vw] md:text-[17px] ml-[2vw] md:ml-[10px]">{{ txt }}</span>
		<div v-if="isClicked" class="ml-auto">
			<NuxtImg src="/img/header/up.webp" width="100%" height="auto"
				class="w-[3.6vw] md:w-[18px] h-[1.8vw] md:h-[9px] block group-hover:hidden" />
			<NuxtImg src="/img/header/up_hover.webp" width="100%" height="auto"
				class="w-[3.6vw] md:w-[18px] h-[1.8vw] md:h-[9px] hidden group-hover:block" />
		</div>
		<div v-else class="ml-auto">
			<NuxtImg src="/img/header/down.webp" width="100%" height="auto"
				class="w-[3.6vw] md:w-[18px] h-[1.8vw] md:h-[9px] block group-hover:hidden" />
			<NuxtImg src="/img/header/down_hover.webp" width="100%" height="auto"
				class="w-[3.6vw] md:w-[18px] h-[1.8vw] md:h-[9px] hidden group-hover:block" />
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'txt',
		'img',
		'hoverImg',
		'isClicked',
	]
}
</script>

<style scoped>
.group:hover {
	background: linear-gradient(90deg, #659AE2, #77E5FF);
	color: #FFF;
}
</style>