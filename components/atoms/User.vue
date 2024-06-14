<template>
	<div class="flex flex-row items-center w-[100%]">
		<NuxtImg src="/img/news/avatar.webp" loading="lazy"
			class="w-[12vw] md:w-[60px] h-[12vw] md:h-[60px] mr-[2vw]  md:mr-[10px]" alt="user" />
		<div>
			<span class="text-[#999999] font-roboto text-[2.6vw] md:text-[13px] block">{{ date }}</span>
			<p class="text-smbase md:text-base">{{ name }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'date',
		'name',
	]
}
</script>