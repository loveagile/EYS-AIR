<template>
	<div class="relative overflow-x-clip mb-[10vw] md:mb-[50px]" v-if="showElement">
		<div class="flex flex-col justify-center items-center mt-[16vw] md:mt-[80px] relative">
			<NuxtImg src="/img/community2/v2-logo.webp" loading="lazy"
				class="w-[65vw] md:w-[325px] h-[13vw] md:h-[65px] mb-[4vw] md:mb-[20px]" alt="v2-logo" />
			<div class="flex justify-center items-end">
				<NuxtImg src="/img/backslash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]"
					alt="backslash" />
				<h3 class="text-smsub md:text-sub text-center mx-[5vw] md:mx-[25px] font-medium">
					2nd Community アプリで、<br>更に出会いと繋がりが拡大！
				</h3>
				<NuxtImg src="/img/slash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]" alt="slash" />
			</div>
			<NuxtImg src="/img/community2/ring.webp" loading="lazy" width="100%" height="auto"
				class="absolute w-[32vw] md:w-[160px] h-[32vw] md:h-[160px] left-[-18vw] md:left-[-90px] top-[-12vw] md:top-[60px]"
				alt="v2-ring" />

			<NuxtImg src="/img/community2/v2-bg.webp" loading="lazy"
				class="w-full mt-[6vw] md:mt-[30px] h-[54vw] md:h-[270px]" alt="v2-bg" />

			<div class="p-[3vw] md:p-[15px]">
				<AtomsTitle text="趣味やライフイベントに合わせた、<br>多彩なコミュニティをご用意しています！" startColor="#55CCAA" endColor="#88DD77"
					class="relative top-[-10vw] md:top-[-50px]" />
				<div class="flex flex-wrap justify-between gap-y-[2.4vw] md:gap-y-[12px] relative top-[-5vw] md:top-[-25px]">
					<MoleculesComCard img="/img/community2/set1.webp" class="w-[48%]" />
					<MoleculesComCard img="/img/community2/set2.webp" class="w-[48%] relative z-10" />
					<NuxtImg src="/img/event/event-ring.webp" loading="lazy" width="100%" height="auto"
						class="absolute w-[19vw] md:w-[95px] h-[19vw] md:h-[95px] right-[-12vw] md:right-[-60px] bottom-[-8vw] md:bottom-[-40px]"
						alt="event-ring" />
				</div>
			</div>

			<div class="p-[3vw] md:p-[15px] mt-[50px]">
				<AtomsTitle text="例えば、<br>こんなコミュニティ！" startColor="#55CCAA" endColor="#88DD77"
					class="relative top-[-10vw] md:top-[-50px]" />
			</div>
			<div class="w-full relative bottom-[6vw] md:bottom-[30px]">
				<Swiper :slides-per-view="1.5" :effect="'creative'" :creative-effect="{
					prev: {
						translate: ['-20%', 0, 0],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}" :initial-slide="1" :centered-slides="true">
					<SwiperSlide>
						<NuxtImg src="/img/community2/slider1.webp" loading="lazy"
							class="w-[66vw] md:w-[330px] h-[123vw] md:h-[615px]" alt="com-v2-slider1" />
					</SwiperSlide>

					<SwiperSlide>
						<NuxtImg src="/img/community2/slider1.webp" loading="lazy"
							class="w-[66vw] md:w-[330px] h-[123vw] md:h-[615px]" alt="com-v2-slider2" />
					</SwiperSlide>

					<SwiperSlide>
						<NuxtImg src="/img/community2/slider1.webp" loading="lazy"
							class="w-[66vw] md:w-[330px] h-[123vw] md:h-[615px]" alt="com-v2-slider3" />
					</SwiperSlide>
				</Swiper>
			</div>

			<div class="flex justify-center w-[50%] mx-auto">
				<AtomsButton btnText="コミュニティ一覧" linkUrl="/" imgUrl="/img/arrow.webp" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.swiper-slide {
	transform: scale(0.8);
}

.swiper-slide-active {
	transform: scale(1);
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showElement = ref(false)

const handleScroll = () => {
	if (window.scrollY > 15000) {
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
</script>