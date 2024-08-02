<template>
	<div class="relative overflow-x-clip">
		<AtomsSectionTitle text="コミュニティ" class="relative z-10 pt-[18vw] md:pt-[90px] pb-[10vw] md:pb-[50px]" />
		<NuxtImg src="/img/community/community-bg.webp" loading="lazy"
			class="absolute w-[95vw] md:w-[495px] h-[80vw] md:h-[400px] left-[-15vw] md:left-[-75px] top-[-18vw] md:top-[-90px]"
			alt="community-bg" />
		<div class="flex justify-center items-end">
			<NuxtImg src="/img/backslash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]"
				alt="backslash" />
			<h3
				class="text-[4.4vw] md:text-[22px] leading-[6vw] md:leading-[30px] text-center mx-[5vw] md:mx-[25px] font-medium ">
				リアルでの出会いを、<br>大切に考えています！
			</h3>
			<NuxtImg src="/img/slash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]" alt="slash" />
		</div>

		<div class="flex flex-col">
			<div class="relative z-20">
				<MoleculesCommunityFeature text="講師との間に<br>生まれる" tit="絆" class="relative z-10" />
				<NuxtImg src="/img/community/feature1.webp" loading="lazy"
					class="w-[50vw] md:w-[250px] h-[50vw] md:h-[250px] absolute bottom-[-32vw] md:bottom-[-160px] left-[45vw] md:left-[225px]"
					alt="feature1" />
			</div>
			<div class="flex justify-start relative z-20 left-[2vw] md:left-[10px]">
				<MoleculesCommunityFeature text="趣味を通じて繋がる<br>一生モノの" tit="仲間"
					class="relative z-10 left-[-2vw] md:left-[-10px]" />
				<NuxtImg src="/img/community/feature2.webp" loading="lazy"
					class="w-[52vw] md:w-[260px] h-[52vw] md:h-[260px] absolute bottom-[-30vw] md:bottom-[-150px] left-[7vw] md:left-[35px] z-[7]"
					alt="feature2" />
				<NuxtImg src="/img/community/ring-bg.webp" loading="lazy"
					class="w-[40vw] md:w-[200px] h-[40vw] md:h-[200px] absolute z-[5] top-[20px] left-[20px]"
					alt="feature2-ring" />
			</div>
			<div class="flex justify-end relative z-20 right-[-2vw] md:right-[-10px]">
				<MoleculesCommunityFeature text="レッスン＆飲み会で<br>生まれる" tit="恋愛" class="relative z-10" />
				<NuxtImg src="/img/community/feature3.webp" loading="lazy"
					class="w-[50vw] md:w-[250px] h-[50vw] md:h-[250px] absolute bottom-[-28vw] right-[28vw] md:right-[140px] top-[23vw] md:top-[115px] z-[7]"
					alt="feature3" />
				<NuxtImg src="/img/community/ring-bg.webp" loading="lazy"
					class="w-[31vw] md:w-[155px] h-[31vw] md:h-[155px] absolute z-[5] right-[12vw] md:right-[60px] top-[20vw] md:top-[100px]"
					alt="ring-bg" />
				<NuxtImg src="/img/community/inner-ring.webp" loading="lazy"
					class="w-[23vw] md:w-[115px] h-[23vw] md:h-[115px] absolute z-[5] top-[60vw] md:top-[300px] right-[56vw] md:right-[280px]"
					alt="inner-ring" />
			</div>
		</div>

		<div class="px-[5.4vw] md:px-[27px] mt-[39vw] md:mt-[195px]">
			<AtomsParallel text="ここはあなたの" startColor="#55CCAA" endColor="#88DD77" class="flex justify-start" />
			<AtomsParallel text="セカンドコミュニティ" startColor="#55CCAA" endColor="#88DD77" class="flex justify-end" />
		</div>

		<div class="flex flex-col justify-center items-center mt-[16.6vw] md:mt-[83px] relative">
			<NuxtImg src="/img/community/logo_EVNTRs.webp" loading="lazy"
				class="w-[50vw] md:w-[250px] h-[8vw] md:h-[40px] mb-[4vw] md:mb-[20px]" alt="evntr-logo" />
			<div class="flex justify-center items-end">
				<NuxtImg src="/img/backslash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]"
					alt="backslash" />
				<h3 class="text-smsub md:text-sub text-center mx-[5vw] md:mx-[25px] font-medium">
					EVNTRs（イベンターズ）が、<br>四季折々のイベントを企画！
				</h3>
				<NuxtImg src="/img/slash.webp" loading="lazy" class="w-[4.4vw] md:w-[22px] h-[7vw] md:h-[35px]" alt="slash" />
			</div>
			<NuxtImg src="/img/community/evntrs-ring.webp" loading="lazy"
				class="absolute left-[-14vw] md:left-[-70px] top-[-16vw] md:top-[-80px] w-[32vw] md:w-[160px] h-[32vw] md:h-[160px]"
				alt="evntrs-ring" />

			<NuxtImg src="/img/community/EVNTR.webp" loading="lazy" class="w-full mt-[6vw] md:mt-[30px]" alt="EVNTR" />

			<div class="p-[3vw] md:p-[15px]">
				<AtomsHeadTitle text="世代・性別・国籍・仕事...<br>バリエーション豊かな仲間が集います！" startColor="#55CCAA" endColor="#88DD77"
					class="relative top-[-11vw] md:top-[-55px]" />
				<div class="flex flex-wrap justify-between gap-y-[2.4vw] md:gap-y-[12px] relative top-[-7.4vw] md:top-[-37px]">
					<NuxtImg src="/img/community/evntrs-ring.webp" loading="lazy"
						class="absolute w-[14vw] md:w-[70px] h-[14vw] md:h-[70px] top-[-2.4vw] md:top-[-12px] left-[-5vw] md:left-[-25px]"
						alt="evntrs-ring" />

					<MoleculesEVNTRCard img="/img/community/EVNTR1.webp" tit="お花見" class="w-[32%] relative z-10" />
					<MoleculesEVNTRCard img="/img/community/EVNTR2.webp" tit="船上パーティー" class="w-[32%]" />
					<MoleculesEVNTRCard img="/img/community/EVNTR3.webp" tit="海水浴ライブ" class="w-[32%]" />
					<MoleculesEVNTRCard img="/img/community/EVNTR4.webp" tit="餅つき大会" class="w-[32%]" />
					<MoleculesEVNTRCard img="/img/community/EVNTR5.webp" tit="秋のBBQ" class="w-[32%]" />
					<MoleculesEVNTRCard img="/img/community/EVNTR6.webp" tit="ハロウィンパーティー" class="w-[32%] relative z-10" />

					<NuxtImg src="/img/community/evntrs-ring.webp" loading="lazy"
						class="absolute w-[22vw] md:w-[110px] h-[22vw] md:h-[110px] right-[-4vw] md:right-[-40px] bottom-[-4vw] md:bottom-[-40px]"
						alt="evntrs-ring" />
				</div>
			</div>

			<div class="w-full relative top-[-3vw] md:top-[-15px]">
				<AtomsHeadTitle text="PICK UP！<br>こんなイベントを開催中！" startColor="#55CCAA" endColor="#88DD77" />
				<Swiper :slides-per-view="2" :effect="'creative'" :creative-effect="{
					prev: {
						translate: ['-20%', 0, 0],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}" :initial-slide="1" :centered-slides="true">
					<SwiperSlide class="px-[2vw] md:px-[10px]">
						<div class="flex flex-col items-center py-[4vw] md:py-[20px] justify-center">
							<p class="font-roboto text-smlarge md:text-large">11.16</p>
							<span
								class="font-roboto font-medium text-[4vw] md:text-[20px] tracking-[3vw] md:tracking-[15px] pl-[3vw] md:pl-[15px]">Fri</span>
							<div class="flex justify-evenly my-[3vw] md:my-[15px] w-full">
								<span
									class="text-[#05B0FD] text-smtiny md:text-tiny bg-white px-[1vw] md:px-[5px] rounded-full">申込受付中</span>
								<span
									class="text-[#FF8822] text-smtiny md:text-tiny bg-white px-[1vw] md:px-[5px] rounded-full">残席わずか：2席</span>
							</div>
							<NuxtImg src="/img/community/slider1.webp" loading="lazy"
								class="w-[44vw] md:w-[220px] h-[44vw] md:h-[220px]" alt="community1" />
							<MoleculesPickUp tit="VEGAS NIGHT" avatar="/img/community/avatar1.webp" color="#2FBD9A"
								school="EYS Music School" desc="綺羅びやかなショート白熱のカジノ、誰しもが憧れる非日常体験の街、ラスベガス。そんなラスベガスの夜をテーマにした指フェスを開催！"
								price="3,000円" startColor="#798DEF" endColor="#92C9EF" linkUrl="/" />
						</div>
					</SwiperSlide>

					<SwiperSlide class="px-[2vw] md:px-[10px]">
						<div class="flex flex-col items-center py-[4vw] md:py-[20px] justify-center">
							<p class="font-roboto text-smlarge md:text-large">11.18</p>
							<span
								class="font-roboto font-medium text-[4vw] md:text-[20px] tracking-[3vw] md:tracking-[15px] pl-[3vw] md:pl-[15px]">Sun</span>
							<div class="flex my-[3vw] md:my-[15px]">
								<span
									class="text-[#FF4444] text-smtiny md:text-tiny bg-white px-[1vw] md:px-[5px] rounded-full">満員御礼</span>
							</div>

							<NuxtImg src="/img/community/slider2.webp" loading="lazy"
								class="w-[44vw] md:w-[220px] h-[44vw] md:h-[220px]" alt="community2" />

							<MoleculesPickUp tit="星空キャンプ" avatar="/img/community/avatar2.webp" color="#2FBD9A" school="Wataru"
								desc="日頃の仕事を忘れて、山の上へ。満点の星空の中、普段言えないこと、話してみませんか。初心者大歓迎！キャンピング用品シェア中。" price="1,000円" startColor="#DDD"
								endColor="#DDD" linkUrl="/" />
						</div>
					</SwiperSlide>

					<SwiperSlide class="px-[2vw] md:px-[10px]">
						<div class="flex flex-col items-center py-[4vw] md:py-[20px] justify-center">
							<p class="font-roboto text-smlarge md:text-large">11.19</p>
							<span
								class="font-roboto font-medium text-[4vw] md:text-[20px] tracking-[3vw] md:tracking-[15px] pl-[3vw] md:pl-[15px]">Mon</span>
							<div class="flex justify-evenly my-[3vw] md:my-[15px] w-full">
								<span
									class="text-[#05B0FD] text-smtiny md:text-tiny bg-white px-[1vw] md:px-[5px] rounded-full">申込受付中</span>
								<span
									class="text-[#FF8822] text-smtiny md:text-tiny bg-white px-[1vw] md:px-[5px] rounded-full">残席わずか：2席</span>
							</div>

							<NuxtImg src="/img/community/slider3.webp" loading="lazy"
								class="w-[44vw] md:w-[220px] h-[44vw] md:h-[220px]" alt="community3" />

							<MoleculesPickUp tit="ピアノ・デュオの宴" avatar="/img/community/avatar3.webp" color="#38AEDA"
								school="EYS Music School" desc="綺羅びやかなショート白熱のカジノ、誰しもが憧れる非日常体験の街、ラスベガス。そんなラスベガスの夜をテーマにした指フェスを開催！"
								price="無料" startColor="#798DEF" endColor="#92C9EF" linkUrl="/" />
						</div>
					</SwiperSlide>
				</Swiper>

				<div class="flex justify-center w-[50%] mx-auto mt-[2vw] md:mt-[10px]">
					<AtomsComButton btnText="イベント一覧" linkUrl="/" imgUrl="/img/arrow.webp" />
				</div>
			</div>
		</div>
	</div>
</template>

<!-- <script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showElement = ref(false)

const handleScroll = () => {
	if (window.scrollY > 1000) {
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