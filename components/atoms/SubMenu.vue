<template>
	<NuxtLink :to="linkUrl"
		class="group flex items-center py-[3vw] md:py-[15px] pl-[11vw] md:pl-[55px] w-full pr-[3vw] md:pr-[15px] border-[1px] border-[#DDDDDD] bg-white">
		<NuxtImg src="/img/header/submenu.webp"
			class="w-[2.6vw] md:w-[13px] h-[2.6vw] md:h-[13px] block group-hover:hidden relative top-[-1vw] md:top-[-5px]" />
		<NuxtImg src="/img/header/submenu_hover.webp" width="100%" height="auto"
			class="w-[2.6vw] md:w-[13px] h-[2.6vw] md:h-[13px] hidden group-hover:block relative top-[-1vw] md:top-[-5px]" />
		<span class="text-[3.4vw] md:text-[17px] ml-[2vw] md:ml-[10px]">{{ txt }}</span>
		<NuxtImg src="/img/header/arrow.webp" width="100%" height="auto"
			class="w-[1.4vw] md:w-[7px] h-[2.4vw] md:h-[12px] ml-auto block group-hover:hidden" />
		<NuxtImg src="/img/header/arrow_hover.webp" width="100%" height="auto"
			class="w-[1.4vw] md:w-[7px] h-[2.4vw] md:h-[12px] ml-auto hidden group-hover:block" />
	</NuxtLink>
</template>

<script>
export default {
	props: [
		'txt',
		'linkUrl',
	]
}
</script>

<style scoped>
.group:hover {
	background: linear-gradient(90deg, #659AE2, #77E5FF);
	color: #FFF;
}
</style>