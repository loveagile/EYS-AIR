<template>
	<div class="relative overflow-x-clip" v-if="showElement">
		<AtomsSectionTitle text="クレイジーさを磨けた" text2="ジャンルのみ開設！" class="relative z-10" />
		<NuxtImg src="/img/lineup/lineup-bg.webp" loading="lazy"
			class="absolute w-[92vw] md:w-[460px] h-[80vw] md:h-[400px] left-[-28vw] md:left-[-140px] top-[-20vw] md:top-[-100px]"
			alt="lineup" />
		<div v-for="(feature, index) in features" :key="index">
			<OrganismsLineFeature :index="index" :titTxt="feature.titTxt" :startColor="feature.startColor"
				:endColor="feature.endColor" :topImg="feature.topImg" :iPadImg="feature.iPadImg" :linkUrl="feature.linkUrl"
				:btnTxt="feature.btnTxt" :ringImg="feature.ringImg" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			features: [
				{
					titTxt: "音楽",
					startColor: "#7799FF",
					endColor: "#77DDFF",
					topImg: "/img/lineup/music-top.webp",
					iPadImg: "/img/lineup/music-ipad.webp",
					linkUrl: "/",
					btnTxt: "音楽特設サイトへ",
					ringImg: '/img/lineup/blue-ring.webp',
				},
				{
					titTxt: "ワイン",
					startColor: "#EE88BB",
					endColor: "#FFCC99",
					topImg: "/img/lineup/wine-top.webp",
					iPadImg: "/img/lineup/wine-ipad.webp",
					linkUrl: "/",
					btnTxt: "ワイン特設サイトへ",
					ringImg: '/img/lineup/red-ring.webp',
				},
				{
					titTxt: "茶道",
					startColor: "#99DD77",
					endColor: "#EEEE55",
					topImg: "/img/lineup/tea-top.webp",
					iPadImg: "/img/lineup/tea-ipad.webp",
					linkUrl: "/",
					btnTxt: "茶道特設サイトへ",
					ringImg: '/img/lineup/green-ring.webp',
				},
				{
					titTxt: "陶芸",
					startColor: "#BBAA88",
					endColor: "#EEDD55",
					topImg: "/img/lineup/pottery-top.webp",
					iPadImg: "/img/lineup/pottery-ipad.webp",
					linkUrl: "/",
					btnTxt: "陶芸特設サイトへ",
					ringImg: '/img/lineup/brown-ring.webp',
				}
			]
		}
	}
}
</script>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showElement = ref(false)

const handleScroll = () => {
	if (window.scrollY > 3300) {
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