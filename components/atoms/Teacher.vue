<template>
	<div class="flex flex-row items-center w-[100%] gap-[1.4vw] md:gap-[7px]">
		<NuxtImg src="/img/pop/teacher.webp" loading="lazy" alt="user" class="w-[10vw] md:w-[40px] h-[10vw] md:h-[40px]" />
		<div class="text-white leading-[4vw] md:leading-[20px]">
			<p class="font-roboto text-[2.6vw] md:text-[13px] block">{{ event }}</p>
			<p class="text-[2.6vw] md:text-[13px]">{{ time }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'event',
		'time',
	]
}
</script>