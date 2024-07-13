<template>
	<NuxtLink to="/" class="reg-btn flex w-full items-center justify-between px-[7vw] md:px-[35px] hover:opacity-75">
		<NuxtImg src="/img/user.webp" loading="lazy" class="w-[5.6vw] md:w-[28px] h-[8vw] md:h-[40px]" alt="user" />
		<div class="text-smbase md:text-base py-[1.8vw] md:py-[9px]">
			<p class="text-[#FF6E6E]">簡易メンバー登録して</p>
			<p class="text-[4.8vw] md:text-[24px]"><span class="font-roboto">2,000</span>円をGET</p>
		</div>
		<NuxtImg src="/img/arrow.webp" loading="lazy" class="w-[5vw] md:w-[25px] h-[1.8vw] md:h-[9px]" alt="arrow" />
	</NuxtLink>
</template>

<style scoped>
.reg-btn {
	text-decoration: none;
	background-color: #000;
	border: solid 2px #000;
	color: #fff;
	margin: 0 auto;
	text-align: center;
	transition: 0.5s;
	position: relative;
}
</style>