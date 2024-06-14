<template>
	<div class="flex mt-[14.4vw] md:mt-[72px] w-full text-smbase md:text-base bg-white relative z-50">
		<NuxtLink @click="() => index = 0" to="/"
			class="w-1/5 flex flex-col items-center justify-center py[3vw] md:py-[15px]" :class="index === 0 ? 'active' : ''">
			<NuxtImg src="/img/top/icon_home.webp" loading="lazy" class="w-[4vw] md:w-[20px] h-[4vw] md:h-[20px]"
				alt="Home" />
		</NuxtLink>

		<NuxtLink @click="() => index = 1" to="/" class="w-1/5 flex justify-center py-[3vw] md:py-[15px]"
			:class="index === 1 ? 'active' : ''">
			<span class="block w-full text-center border-l-[0.4vw] md:border-l-[2px] border-[#DDDDDD]">音楽</span>
		</NuxtLink>

		<NuxtLink @click="() => index = 2" to="/" class="w-1/5 flex justify-center py-[3vw] md:py-[15px]"
			:class="index === 2 ? 'active' : ''">
			<span class="block w-full text-center border-l-[0.4vw] md:border-l-[2px] border-[#DDDDDD]">ワイン</span>
		</NuxtLink>

		<NuxtLink @click="() => index = 3" to="/" class="w-1/5 flex justify-center py-[3vw] md:py-[15px]"
			:class="index === 3 ? 'active' : ''">
			<span class="block w-full text-center border-l-[0.4vw] md:border-l-[2px] border-[#DDDDDD]">茶道</span>
		</NuxtLink>

		<NuxtLink @click="() => index = 4" to="/" class="w-1/5 flex justify-center py-[3vw] md:py-[15px]"
			:class="index === 4 ? 'active' : ''">
			<span class="block w-full text-center border-l-[0.4vw] md:border-l-[2px] border-[#DDDDDD]">陶芸</span>
		</NuxtLink>
	</div>
	<div class="relative mb-[4vw] md:mb-[20px]">
		<NuxtImg src="/img/top/FV.webp" loading="lazy" class="w-full h-[160vw] md:h-[800px] absolute top-0 left-0"
			alt="FV_bg" />

		<div class="relative z-10 flex flex-col items-center pt-[6vw] md:pt-[30px]">
			<div class="flex justify-center items-center">
				<NuxtImg src="/img/backslash.webp" loading="lazy" class="w-[3vw] md:w-[15px] h-[4vw] md:h-[20px]"
					alt="backslash" />
				<h3 class="text-[4vw] md:text-[20px] text-center mx-[2vw] md:mx-[10px] font-medium">
					驚きのクレイジー特典を、無料プレゼント！
				</h3>
				<NuxtImg src="/img/slash.webp" loading="lazy" class="w-[3vw] md:w-[15px] h-[4vw] md:h-[20px]" alt="slash" />
			</div>
			<h2 class="text-[6.4vw] md:text-[32px] my-[2vw] md:my-[10px]">EYSのオンラインアカデミー</h2>
		</div>

		<div class="flex justify-evenly mt-[2vw] md:mt-[10px]">
			<div class="relative">
				<MoleculesFVIteam tit="音楽" startColor="#7799FF" endColor="#77DDFF" img="/img/top/music.webp" txt="楽器"
					class="relative z-10" />
				<NuxtImg src="/img/top/music-ring.webp" loading="lazy"
					class="w-[18.6vw] md:w-[93px] h-[18.6vw] md:h-[93px] absolute left-[-7vw] md:left-[-35px] top-0"
					alt="music-ring" />
			</div>
			<div class="relative">
				<MoleculesFVIteam tit="ワイン" startColor="#EE88BB" endColor="#FFCC99" img="/img/top/wine.webp" txt="ワイングラス"
					class="relative z-10" />
				<NuxtImg src="/img/top/wine-ring.webp" loading="lazy"
					class="w-[13vw] md:w-[65px] h-[13vw] md:h-[65px] absolute right-[-6vw] md:right-[-30px] top-[11vw] md:top-[55px]"
					alt="wine-ring" />
			</div>
		</div>
		<div class="flex justify-between mt-[-3vw] md:mt-[-15px] px-[3vw] md:px-[15px]">
			<div class="relative">
				<MoleculesFVIteam tit="茶道" startColor="#99DD77" endColor="#EEEE55" img="/img/top/tea.webp" txt="茶釜・畳"
					class="relative z-10" />
				<NuxtImg src="/img/top/tea-ring.webp" loading="lazy"
					class="w-[13vw] md:w-[65px] h-[13vw] md:h-[65px] absolute right-[-7vw] md:right-[-35px] top-[10vw] md:top-[50px]"
					alt="tea-ring" />
			</div>
			<div class="relative">
				<MoleculesFVIteam tit="陶芸" startColor="#BBAA88" endColor="#EEDD55" img="/img/top/pottery.webp" txt="焼き窯"
					class="relative z-10" />
				<NuxtImg src="/img/top/pottery-ring.webp" loading="lazy"
					class="w-[8.8vw] md:w-[44px] h-[8.8vw] md:h-[44px] absolute right-0 bottom-[12vw] md:bottom-[60px]"
					alt="pottery-ring" />
			</div>
		</div>
		<div class="flex justify-center">
			<NuxtImg src="/img/top/mockup.webp" loading="lazy" width="100%" height="auto"
				class="w-[75.2vw] md:w-[376px] h-[50vw] md:h-[250px] relative z-10" alt="mockup" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const index = useState('index', () => 0);
</script>

<style scoped>
.active {
	border-bottom: 4px;
	border-style: solid;
	border-color: #222222;
}
</style>