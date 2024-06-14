<template>
	<NuxtLink :to="linkUrl" class="flex items-center py-[2vw] md:py-[10px] w-full">
		<NuxtImg src="/img/footer/arrow.webp" loading="lazy" class="w-[3.2vw] md:w-[16px] h-[1.4vw] md:h-[7px]"
			alt="arrow" />
		<span class="text-[3vw] md:text-[15px] ml-[2vw] md:ml-[10px]">{{ txt }}</span>
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