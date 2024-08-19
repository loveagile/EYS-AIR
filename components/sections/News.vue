<template>
	<div class="relative overflow-x-clip z-50">
		<AtomsSectionTitle text="新着トピックス" class="relative z-10 pt-[19vw] md:pt-[95px] pb-[12vw] md:pb-[60px]" />
		<NuxtImg src="/img/news/news-bg.webp" loading="lazy"
			class="absolute w-[78vw] md:w-[390px] h-[78vw] md:h-[390px] left-[-15vw] md:left-[-75px] top-[-16vw] md:top-[-80px]"
			alt="news" />
		<NuxtImg src="/img/news/news-ring.webp" loading="lazy"
			class="absolute w-[30vw] md:w-[150px] h-[30vw] md:h-[150px] right-[-10vw] md:right-[-50px] top-[26vw] md:top-[130px]"
			alt="news-ring" />
		<div>
			<Swiper class="news-swiper" :slides-per-view="1.3" :effect="'creative'" :creative-effect="{
				prev: {
					translate: ['-100%', 0, 0],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			}">
				<SwiperSlide>
					<AtomsCard class="w-[65vw] md:w-[325px] rounded-md">
						<OrganismsNewsCard text="新規OPEN" startColor="#FF4455" endColor="#FF99EE" />
					</AtomsCard>
				</SwiperSlide>

				<SwiperSlide>
					<AtomsCard class="w-[65vw] md:w-[325px] rounded-md">
						<OrganismsNewsCard text="発表会 [ユビフェス]" startColor="#00CCEE" endColor="#44EECC" />
					</AtomsCard>
				</SwiperSlide>

				<SwiperSlide>
					<AtomsCard class="w-[65vw] md:w-[325px] rounded-md">
						<OrganismsNewsCard text="イベント" startColor="#00BBBB" endColor="#66EEBB" />
					</AtomsCard>
				</SwiperSlide>

				<SwiperSlide>
					<AtomsCard class="w-[65vw] md:w-[325px] rounded-md">
						<OrganismsNewsCard text="バンド" startColor="#0088EE" endColor="#66CCFF" />
					</AtomsCard>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="px-[5.4vw] md:px-[27px]">
			<AtomsCard class="my-[5.4vw] md:my-[27px] rounded-md">
				<OrganismsEYSDesc />
			</AtomsCard>
			<AtomsCard class="rounded-md">
				<OrganismsEYSAll />
			</AtomsCard>
		</div>
	</div>
</template>

<style scoped>
.news-swiper {
	padding-left: 5.4vw;
}

@media (min-width: 500px) {
	.news-swiper {
		padding-left: 27px;
	}
}
</style>