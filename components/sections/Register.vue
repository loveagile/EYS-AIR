<template>
	<div class="relative overflow-x-clip px-[2.6vw] md:px-[13px] z-30">
		<div
			class="bg-black text-white py-[5vw] md:py-[15px] rounded-t-[1.6vw] md:rounded-t-[8px] relative z-10 flex justify-center items-center">
			<span class="text-[4.8vw] md:text-[24px] font-roboto font-bold px-[1vw] md:px-[5px] italic">12/14</span>
			<span class="number text-[3.8vw] md:text-[19px]">23:59</span><span class="jp">まで</span>
			<span
				class="bg-white text-[#FF6E6E] py-[1vw] md:py-[5px] px-[1vw] md:px-[5px] text-[4.8vw] md:text-[24px] rounded-[1.6vw] md:rounded-[8px] font-medium mx-[0.6vw] md:mx-[3px]">
				本日締切
			</span>
			<span class="jp">残り</span><span class="number">10</span>
			<span class="jp">時間</span><span class="number">42</span><span class="jp">分</span>
			<span class="number">38</span><span class="jp">秒</span>
		</div>
		<div class="relative">
			<h2 class="text-smtit md:text-tit text-center py-[4vw] md:py-[20px] font-medium relative z-10">
				今だけキャンペーン中！
			</h2>
			<div class="relative z-20">
				<div class="px-[4vw] md:px-[20px] mb-[3vw] md:mb-[15px]">
					<div class="flex justify-start items-center">
						<div class="text-white px-[6vw] md:px-[30px] py-[1.6vw] md:py-[8px] transform skew-x-[-25deg]"
							:style="{ background: `linear-gradient(45deg, #FF7273, #FFBCDD)` }">
							<p class="text-[4.8vw] md:text-[24px] transform skew-x-[25deg]">今なら</p>
						</div>
					</div>
					<div class="flex justify-start items-center">
						<div
							class="flex items-center text-white px-[4vw] md:px-[20px] py-[1.6vw] md:py-[8px] ml-[1.6vw] md:ml-[8px] transform skew-x-[-25deg]"
							:style="{ background: `linear-gradient(45deg, #FF7273, #FFBCDD)` }">
							<NuxtImg src="/img/tick.webp" loading="lazy"
								class="w-[12vw] md:w-[60px] h-[11vw] md:h-[55px] transform skew-x-[25deg]" alt="tick" />
							<span
								class="font-roboto text-[8.8vw] md:text-[44px] transform skew-x-[25deg] px-[2vw] md:px-[10px] italic">2,000</span>
							<span class="text-[4.8vw] md:text-[24px] transform skew-x-[25deg]">円OFFチケット</span>
						</div>
					</div>
					<div class="flex justify-end items-center">
						<div class="text-white px-[7vw] md:px-[35px] py-[1.6vw] md:py-[8px] transform skew-x-[-25deg]"
							:style="{ background: `linear-gradient(45deg, #FF7273, #FFBCDD)` }">
							<p class="text-[4.8vw] md:text-[24px] transform skew-x-[25deg]">プレゼント！</p>
						</div>
					</div>
				</div>
				<div class="px-[3vw] md:px-[15px]">
					<AtomsRegisterButton class="relative z-20" />
					<div class="flex justify-center py-[1vw] md:py-[5px]">
						<NuxtLink to="/" class="relative z-20 text-smbase md:text-base hover:opacity-75 underline">メンバーの方はログイン
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<NuxtImg src="/img/campaign-bg.webp" loading="lazy"
			class="absolute top-0 left-0 z-0 px-[2.6vw] md:px-[13px] h-full w-full" alt="campaign-bg" />
	</div>
</template>

<style scoped>
.number {
	font-size: 4vw;
	font-weight: 700;
	font-family: "Roboto";
	font-style: italic;
	margin-right: 0.6vw;
}

.jp {
	font-size: 2.5vw;
	letter-spacing: 0;
}

@media (min-width: 500px) {
	.number {
		font-size: 20px;
		margin-right: 3px;
	}

	.jp {
		font-size: 14px;
	}
}
</style>