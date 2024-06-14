<template>
	<div class="relative bg-white">
		<div class="w-full">
			<NuxtImg :src="imgSrc" loading="lazy" class="w-full h-[41.6vw] md:h-[208px]" alt="pop-card-img" />
		</div>
		<div class="p-[2.4vw] md:p-[12px]">
			<div class="text-smmini md:text-mini">
				<div>
					<span class="inline-block w-[13vw] md:w-[65px]">ジャンル</span>
					<span>：</span>
					<span class="px-[1vw] md:px-[5px]">音楽</span>
				</div>
				<div>
					<span class="inline-block w-[13vw] md:w-[65px]">コース</span>
					<span>：</span>
					<span class="px-[1vw] md:px-[5px]">初心者コース</span>
				</div>
				<div>
					<span class="inline-block w-[13vw] md:w-[65px]">費用</span>
					<span>：</span>
					<span class="px-[1vw] md:px-[5px]">13,800円/月</span>
				</div>
				<div>
					<span class="inline-block w-[13vw] md:w-[65px]">回数</span>
					<span>：</span>
					<span class="px-[1vw] md:px-[5px]">回数の定めなし</span>
				</div>
				<div>
					<span class="inline-block w-[13vw] md:w-[65px]">期間</span>
					<span>：</span>
					<span class="px-[1vw] md:px-[5px]">2020/9/1~</span>
				</div>
				<div>
					<span class="inline-block w-[13vw] md:w-[65px]">開催方法</span>
					<span>：</span>
					<span class="px-[1vw] md:px-[5px]">
						<AtomsRound text="ライブ配信" startColor="#7799FF" endColor="#77DDFF" />
						<AtomsRound text="動画見逃し配信" startColor="#CCCCCC" endColor="#CCCCCC" class="ml-[1vw] md:ml-[5px]" />
					</span>
				</div>
				<div>
					<span class="inline-block w-[13vw] md:w-[65px]">定員</span>
					<span>：</span>
					<span class="px-[1vw] md:px-[5px]">
						定員 10名 /
						<span class="text-[#FF6600]">残席数 3名</span>
					</span>
				</div>
			</div>
			<div class="border-2 border-solid border-[#F6F6F6] my-[1.2vw] md:my-[6px]">
				<p :style="{ background: `linear-gradient(45deg, #FFBB55, #FFCCBB)` }"
					class="text-smbase md:text-base py-[0.8vw] md:py-[4px] text-center text-white">クレイジー特典
				</p>
				<div class="flex flex-row items-center w-[100%] p-[2.6vw] md:p-[13px]">
					<NuxtImg :src="benefitImg" loading="lazy" alt="bft-Img"
						class="w-[10.6vw] md:w-[53px] h-[10.6vw] md:h-[53px]" />
					<span class="block text-smbase md:text-base text-[#FFBB55] ml-[2.4vw] md:ml-[12px]">{{ benefitTxt }}</span>
				</div>
			</div>

			<div class="flex items-center">
				<NuxtImg src="/img/pop/user1.webp" loading="lazy" alt="user" class="w-[8vw] md:w-[40px] h-[8vw] md:h-[40px]" />
				<NuxtImg src="/img/pop/user2.webp" loading="lazy" alt="user"
					class="w-[8vw] md:w-[40px] h-[8vw] md:h-[40px] relative left-[-2vw] md:left-[-10px]" />
				<NuxtImg src="/img/pop/user3.webp" loading="lazy" alt="user"
					class="w-[8vw] md:w-[40px] h-[8vw] md:h-[40px] relative left-[-4vw] md:left-[-20px]" />
				<NuxtImg src="/img/pop/user4.webp" loading="lazy" alt="user"
					class="w-[8vw] md:w-[40px] h-[8vw] md:h-[40px] relative left-[-6vw] md:left-[-30px]" />
				<NuxtImg src="/img/pop/user5.webp" loading="lazy" alt="user"
					class="w-[8vw] md:w-[40px] h-[8vw] md:h-[40px] relative left-[-8vw] md:left-[-40px]" />
				<span class="text-smmini md:text-mini text-[#7799FF] relative left-[-5vw] md:left-[-25px]">
					…12名が担当
				</span>
			</div>
		</div>

		<NuxtImg src="/img/pop/review.webp" loading="lazy" class="w-full h-[61vw] md:h-[305px]" alt="review" />
		<div class="p-[1.2vw] md:p-[6px]">
			<AtomsButton btnText="詳しく見る" linkUrl="/" imgUrl="/img/arrow.webp" class="m-[1.2vw] md:m-[6px]" />
		</div>

		<div class="absolute left-[-2.2vw] md:left-[-11px] top-[2.6vw] md:top-[13px] z-50">
			<AtomsAntiParallel :text="text" :startColor="startColor" :endColor="endColor" />
		</div>
		<NuxtImg src="/img/pop/love.webp" loading="lazy" alt="love"
			class="w-[13vw] md:w-[65px] h-[13vw] md:h-[65px] absolute right-[0] top-[0] z-50" />
	</div>
</template>

<script>
export default {
	props: [
		'text',
		'startColor',
		'endColor',
		'imgSrc',
		'benefitImg',
		'benefitTxt',
	]
}
</script>

<style scoped>
.arrow {
	clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
	top: 0%;
}
</style>