<template>
	<div class="p-[4.6vw] md:p-[23px]">
		<h4 class="text-center text-smsub md:text-sub">
			老若男女・性別・経験を問わず、<br>幅広くご支持いただいています！
		</h4>
		<div class="flex justify-center">
			<div class="border-b-2 my-[4vw] md:my-[20px] border-[#999999] border-solid w-[12vw] md:w-[60px]"></div>
		</div>

		<AtomsTitle text="男女比" startColor="#77DDFF" endColor="#7799FF" class="mt-[1vw] md:mt-[5px] mb-[2vw] md:mb-[10px]" />

		<h4 class="text-center text-smsub md:text-sub text-blue">
			男性にも女性にも、<br>お楽しみいただいています！
		</h4>

		<NuxtImg src="/img/news/rate-chart.webp" loading="lazy"
			class="w-[80vw] md:w-[400px] h-[64vw] md:h-[320px] my-[5vw] md:my-[25px]" alt="rate-chart" />

		<AtomsTitle text="年代分布" startColor="#77DDFF" endColor="#7799FF" class="my-[2vw] md:my-[10px]" />

		<h4 class="text-center text-smsub md:text-sub text-blue">
			年代別・レベル別のクラス分けで、<br>安心してレッスンを受けられます！
		</h4>

		<NuxtImg src="/img/news/age-chart.webp" loading="lazy"
			class="w-[80vw] md:w-[400px] h-[62vw] md:h-[310px] my-[5vw] md:my-[25px]" alt="age-chart" />
	</div>
</template>

<style scoped>
.rate-chart {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-image: conic-gradient(#FF99CC 216deg, #7799FF 0);
	position: relative;
	overflow: hidden;
}
</style>