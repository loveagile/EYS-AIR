<template>
	<a :href="linkUrl" class="button py-[2vw] md:py-[10px] block w-full opacity-95">
		<span class="text-smbase md:text-base py-[1.8vw] md:py-[9px]">{{ btnText }}</span>
		<NuxtImg class="inline absolute right-[10px] top-[50%] translate-y-[-50%] w-[4vw] md:w-[20px] h-[4vw] md:h-[20px]"
			src="/img/goto.webp" loading="lazy" alt="goto" />
	</a>
</template>

<script>
export default {
	props: [
		'btnText',
		'linkUrl',
	]
}
</script>

<style scoped>
.button {
	text-decoration: none;
	background-color: #000;
	border: solid 2px #000;
	color: #fff;
	display: block;
	margin: 0 auto;
	text-align: center;
	transition: 0.5s;
	position: relative;
}

.button:hover {
	color: #fff;
	background: #fff;
	color: #000;
	border: solid 2px #000;
}
</style>