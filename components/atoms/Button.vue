<template>
	<NuxtLink :to="linkUrl" class="button py-2 block w-full">
		<span class="text-smbase md:text-base py-[1.8vw] md:py-[9px]">{{ btnText }}</span>
		<NuxtImg class="btnImg w-[4.4vw] md:w-[22px] h-[1.6vw] md:h-[8px]" :src="imgUrl" loading="lazy" alt="arrow" />
	</NuxtLink>
</template>

<script>
export default {
	props: [
		'btnText',
		'linkUrl',
		'imgUrl',
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

.btnImg {
	display: inline;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
}

.button:hover {
	color: #fff;
	background: #fff;
	color: #000;
	border: solid 2px #000;
}
</style>