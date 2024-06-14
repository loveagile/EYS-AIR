<template>
	<NuxtLink :to="linkUrl"
		class="btn relative text-center w-[90%] py-[2vw] md:py-[10px] flex items-center justify-between px-[10px] rounded-full mt-[3vw] md:mt-[15px] hover:opacity-75"
		:style="{ background: `linear-gradient(to right, ${startColor}, ${endColor})` }">
		<span class="text-smbase md:text-base text-white">イベント申し込み</span>
	</NuxtLink>
</template>

<script>

export default {
	props: [
		'startColor',
		'endColor',
		'linkUrl',
	]
}
</script>

<style scoped>
body {
	font-family: sans-serif;
}

.btn {
	text-decoration: none;
	display: block;
	transition: 0.5s;
	position: relative;
}

.btn:before {
	content: "";
	display: block;
	width: 10px;
	height: 10px;
	border-right: solid 1px white;
	border-bottom: solid 1px white;
	transform: rotate(-45deg);
	position: absolute;
	transition: 0.3s;
	top: 50%;
	right: 20px;
	margin-top: -5px;
}
</style>