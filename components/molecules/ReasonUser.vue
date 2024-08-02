<template>
	<div class="relative flex flex-col items-center">
		<NuxtImg :src="userImg" loading="lazy" class="w-[25vw] md:w-[125px] h-[27vw] md:h-[135px]" alt="user-img" />
	</div>
	<div class="bg-white flex flex-col justify-center items-center py-[2vw] md:py-[10px] w-full"
		:class="[isClicked ? 'active' : '']">
		<p class="text-[5vw] md:text-[25px]">{{ text }}</p>
		<span class="text-smmini md:text-mini">の場合</span>
	</div>
	<div :class="[isClicked ? 'triangle border-[2vw] md:border-[10px] border-b-[0]' : '']"></div>
</template>

<script>

export default {
	props: [
		'userImg',
		'text',
		'isClicked'
	]
}
</script>

<style scoped>
.active {
	background-color: #222222;
	color: white;
}

.triangle {
	width: 0px;
	height: 0px;
	border-style: solid;
	border-color: #222222 transparent transparent transparent;
	transform: rotate(0deg);
}
</style>