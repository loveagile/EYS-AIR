<template>
	<div class="relative overflow-x-clip py-[2vw] md:py-[10px] bottom-[37vw] md:bottom-[185px] hover:cursor-pointer">
		<div class="relative">
			<NuxtImg src="/img/reason/v1/bg.webp" loading="lazy" class="w-full h-[102vw] md:h-[510px]" alt="reason-bg" />
			<div class="absolute w-full top-[50%]">
				<MoleculesReasonTitle number="02" text="進化を続ける<br>オンラインシステム" />
			</div>
		</div>
		<div class="flex relative top-[-10vw] md:top-[-50px]">
			<div v-for="(user, index) in users" :key="index" class="w-[25%] flex flex-col items-center"
				@click="() => currentIndex = index">
				<MoleculesReasonUser :userImg="user.userImg" :text="user.text" :isClicked="currentIndex === index" />
			</div>
		</div>

		<div class="px-[5.4vw] md:px-[27px] relative top-[-29.6vw] md:top-[-148px]">
			<div class="absolute w-full top-[-14vw] md:top-[-70px] left-[0]">
				<AtomsHeadTitle text="自宅がスタジオに<br>早変わり！" startColor="#7799FF" endColor="#77DDFF" />
			</div>
			<NuxtImg src="/img/reason/v2/home.webp" loading="lazy"
				class="mt-[36vw] md:mt-[180px] w-full h-[67vw] md:h-[335px]" alt="v2-home" />
			<p class="text-white inline-block py-[1.6vw] md:py-[8px] pl-[3vw] md:pl-[15px] pr-[10vw] md:pr-[50px] absolute bottom-[4.8vw] md:bottom-[24px] text-[4vw] md:text-[20px]"
				:style="{ background: `linear-gradient(45deg, #7799FF, #77DDFF)` }">
				タップひとつで家が教室に！</p>
		</div>

		<div class="px-[5.4vw] md:px-[27px] mt-[2vw] md:mt-[10px] relative z-30 top-[-20vw] md:top-[-100px]">
			<NuxtImg src="/img/reason/v2/bg.webp" loading="lazy"
				class="w-full h-[291vw] md:h-[1460px] absolute top-0 left-0 px-[5.4vw] md:px-[27px]" alt="v2-bg" />
			<div class="absolute left-[4%] top-0 flex justify-center flex-col translate-y-[-50%] ml-[5.4vw] md:ml-[27px]">
				<NuxtImg src="/img/reason/v2/but.webp" loading="lazy" class="w-[24vw] md:w-[120px] h-[20vw] md:h-[100px]"
					alt="but-img" />
				<p class="w-full text-[5vw] md:text-[25px] absolute flex justify-center items-center">
					でも...
				</p>
			</div>
			<h2 class="relative z-10 text-smtit md:text-tit text-white text-center pt-[24vw] md:pt-[120px]">
				「オンライン」なんて、<br>何だか不安...
			</h2>
			<div class="flex justify-center mt-[4vw] md:mt-[20px] gap-[3vw] md:gap-[15px]">
				<AtomsUnion img="/img/reason/v2/union1.webp" text="楽譜って<br>どうやって<br>共有する？" />
				<AtomsUnion img="/img/reason/v2/union2.webp" text="細かな動き<br>チェック<br>できる？" />
				<AtomsUnion img="/img/reason/v2/union3.webp" text="SNS投稿<br>投げ銭も<br>できる？" />
			</div>

			<NuxtImg src="/img/reason/v2/catch.webp" loading="lazy"
				class="relative z-10 w-[64vw] md:w-[320px] h-[26vw] md:h-[130px] mx-auto mt-[18vw] md:mt-[90px]"
				alt="catch-img" />

			<OrganismsReasonFeatureV2 text="音楽に最適化した<br>オンラインシステム" img="/img/reason/v2/feature1.webp"
				desc="先生と一緒にリアルタタイムで<br>楽譜を見ながらレッスンできます！" />

			<OrganismsReasonFeatureV2 text="手元と引きのW表示！<br>2画面で分かりやすい！" img="/img/reason/v2/feature2.webp"
				desc="先生側も生徒側も2画面にできるから、<br>細かな指の動きまでチェックしてもらえます！" />
		</div>
	</div>
</template>

<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue'

// const showElement = ref(false)

// const handleScroll = () => {
// 	if (window.scrollY > 800) {
// 		showElement.value = true
// 	} else {
// 		showElement.value = false
// 	}
// }

// onMounted(() => {
// 	window.addEventListener('scroll', handleScroll)
// })

// onUnmounted(() => {
// 	window.removeEventListener('scroll', handleScroll)
// })

const currentIndex = useState('currentIndex', () => 0);

const users = ref([
	{
		userImg: "/img/reason/v2/user1.webp",
		text: "音楽",
	},
	{
		userImg: "/img/reason/v2/user2.webp",
		text: "ワイン",
	},
	{
		userImg: "/img/reason/v2/user3.webp",
		text: "茶道",
	},
	{
		userImg: "/img/reason/v2/user4.webp",
		text: "陶芸",
	},
]);
</script>