<template>
	<div class="relative overflow-x-clip">
		<div class="flex flex-col justify-center items-center mt-[11.4vw] md:mt-[57px] relative">
			<NuxtImg src="/img/event/event-logo.webp" loading="lazy" width="100%" height="auto"
				class="w-[26vw] md:w-[130px] h-[10vw] md:h-[50px] mb-[4vw] md:mb-[20px]" alt="event-logo" />
			<div class="flex justify-center items-end">
				<NuxtImg src="/img/backslash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]"
					alt="backslash" />
				<h3 class="text-smsub md:text-sub text-center mx-[5vw] md:mx-[25px] font-medium">
					スクールで恋して結婚へ...<br>EYSが提案する新しい出会い
				</h3>
				<NuxtImg src="/img/slash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]" alt="slash" />
			</div>
			<NuxtImg src="/img/event/event-ring.webp" loading="lazy"
				class="absolute w-[30vw] md:w-[150px] h-[30vw] md:h-[150px] right-[-10vw] md:right-[-50px] top-[-5vw] md:top-[-25px]"
				alt="event-ring" />

			<NuxtImg src="/img/event/event-bg.webp" loading="lazy" class="w-full h-[53vw] md:h-[265px] mt-[6vw] md:mt-[30px]"
				alt="evnet-bg" />

			<div class="p-[3vw] md:p-[15px]">
				<AtomsHeadTitle text="趣味を通じて自然に仲良くなれる、<br>様々なイベントを開催しています！" startColor="#55CCAA" endColor="#88DD77"
					class="relative top-[-12vw] md:top-[-60px]" />
				<div class="flex flex-wrap justify-between gap-y-[2.4vw] md:gap-y-[12px] relative top-[-7vw] md:top-[-35px]">
					<MoleculesEVNTRCard img="/img/event/event1.webp" tit="料理合コン" class="w-[32%]" />
					<MoleculesEVNTRCard img="/img/event/event2.webp" tit="ゴルフ合コン" class="w-[32%]" />
					<MoleculesEVNTRCard img="/img/event/event3.webp" tit="ワイン合コン" class="w-[32%]" />
				</div>
			</div>

			<div class="flex justify-center w-[50%] mx-auto">
				<AtomsComButton btnText="スク婚ページへ" linkUrl="/" imgUrl="/img/arrow.webp" />
			</div>
		</div>

	</div>
</template>

<!-- <script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showElement = ref(false)

const handleScroll = () => {
	if (window.scrollY > 1400) {
		showElement.value = true
	} else {
		showElement.value = false
	}
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script> -->