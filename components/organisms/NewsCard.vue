<template>
	<div class="relative bg-white">
		<div class="p-[2.6vw] md:p-[13px]">
			<span
				class="block text-end font-roboto text-[2.6vw] md:text-[13px] text-[#999999] my-[3vw] md:my-[15px]">2022.11.4
				UPDATE</span>
			<h3 class="text-smsub md:text-sub my-[4vw] md:my-[20px]">
				代官山スタジオがグランドOPEN
			</h3>
			<p class="text-[2.8vw] md:text-[14px] leading-[5vw] md:leading-[25px]">
				音楽教室激戦区・代官山にEYSの新たな代官山スタジオをOPEN！高級感のあるカ…
			</p>
		</div>
		<div class="w-full">
			<NuxtImg src="/img/news/room.webp" loading="lazy" class="w-full h-[55vw] md:h-[275px]" alt="room" />
		</div>
		<div class="p-[2.6vw] md:p-[13px]">
			<AtomsUser date="2022.11.4" name="上塚えり" />
			<div class="arrow w-[3.8vw] md:w-[19px] h-[4vw] md:h-[20px] bg-[#F6F6F6] ml-[4.8vw] md:ml-[24px]"></div>
			<p
				class="bg-[#F6F6F6] text-[2.6vw] md:text-[13px] p-[2.6vw] md:p-[13px] leading-[3.4vw] md:leading-[17px] rounded-lg">
				アクセス抜群の立地で、仕事帰りでも気軽にお越しいただけます。さらに、近くにはおしゃれなカフェやアパレルショップ、…
			</p>
		</div>
		<div class="absolute left-[-2.2vw] md:left-[-11px] top-[2.6vw] md:top-[13px] z-50">
			<AtomsAntiParallel :text="text" :startColor="startColor" :endColor="endColor" />
		</div>
	</div>

</template>

<script>
export default {
	props: [
		'text',
		'startColor',
		'endColor'
	]
}
</script>

<style scoped>
.arrow {
	clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
	top: 0%;
}
</style>