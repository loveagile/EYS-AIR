<template>
	<div>
		<NuxtImg src="/img/voice/voice-tit.webp" loading="lazy"
			class="w-[70vw] md:w-[350px] h-[26.4vw] md:h-[132px] py-[2vw] md:py-[10px] mx-auto" alt="user's voice" />

		<Swiper class="voice-swiper" :slides-per-view="1.5" :effect="'creative'" :creative-effect="{
			prev: {
				translate: ['-100%', 0, 0],
			},
			next: {
				translate: ['100%', 0, 0],
			},
		}" :initial-slide="1" :centered-slides="true">
			<SwiperSlide>
				<MoleculesVoice socialImg="/img/voice/instagram.webp" userImg="/img/voice/user2.webp"
					mainImg="/img/voice/bg2.webp" />
			</SwiperSlide>
			<SwiperSlide>
				<MoleculesVoice socialImg="/img/voice/facebook.webp" userImg="/img/voice/user2.webp"
					mainImg="/img/voice/bg2.webp" />
			</SwiperSlide>
			<SwiperSlide>
				<MoleculesVoice socialImg="/img/voice/instagram.webp" userImg="/img/voice/user2.webp"
					mainImg="/img/voice/bg2.webp" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped>
.swiper {
	padding-bottom: 30px;
	position: relative;
	margin-top: 30px;
	margin-bottom: 50px;
	z-index: 10;
}

.swiper-slide {
	position: relative;
	top: 60px;
	opacity: 0.5;
	transition: transform 0.3s ease;
}

.swiper-slide-active {
	transform: scaleX(1.1);
	top: 0;
	opacity: 1;
	z-index: 10;
}
</style>

<!-- <script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showElement = ref(false)

const handleScroll = () => {
	if (window.scrollY > 600) {
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