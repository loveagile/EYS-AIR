<template>
	<div class="flex justify-between">
		<div class="relative w-[48%]">
			<NuxtImg :src="`/img/joinus/pagination/${index % totalPosts + 1}_sm.webp`" loading="lazy"
				class="w-[90%] h-[58vw] md:h-[290px]" alt="pagination-sub" />
			<div class="flex flex-col items-end absolute right-0 top-[60%] w-full">
				<AtomsCard class="w-[90%] rounded-[4vw] md:rounded-[20px]">
					<div class="flex flex-col p-[3vw] md:p-[15px] text-smbase md:text-base w-full">
						<p class="text-[3.6vw] md:text-[18px]">大人の楽器サック</p>
						<span class="text-[#DDDDDD] font-apple text-smbase md:text-base relative top-[4vw] md:top-[20px]">Kazuho
							Ishida</span>
						<span class="text-smmini md:text-mini relative z-50 mt-[1.4vw] md:mt-[7px]">石田 一帆</span>
						<span class="text-smtiny md:text-tiny tracking-[-1px] my-[0.8vw] md:my-[4px]">ショップ店員 / 24歳 / 挑戦楽</span>
					</div>
				</AtomsCard>
			</div>
		</div>

		<div class="relative w-[48%] top-[8vw] md:top-[40px]">
			<NuxtImg :src="`/img/joinus/pagination/${(index + 1) % totalPosts + 1}_sm.webp`" loading="lazy"
				class="w-[90%] h-[58vw] md:h-[290px]" alt="pagination-sub-right" />
			<div class="flex flex-col items-end absolute right-0 top-[60%] w-full">
				<AtomsCard class="w-[90%] rounded-[4vw] md:rounded-[20px]">
					<div class="flex flex-col p-[3vw] md:p-[15px] text-smbase md:text-base">
						<p class="text-[3.6vw] md:text-[18px]">大人の楽器サック</p>
						<span class="text-[#DDDDDD] font-apple text-smbase md:text-base relative top-[4vw] md:top-[20px]">Kazuho
							Ishida</span>
						<span class="text-smmini md:text-mini relative z-50 mt-[1.4vw] md:mt-[7px]">石田 一帆</span>
						<span class="text-smtiny md:text-tiny tracking-[-1px] my-[0.8vw] md:my-[4px]">ショップ店員 / 24歳 / 挑戦楽</span>
					</div>
				</AtomsCard>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'index',
		'totalPosts',
	]
}
</script>