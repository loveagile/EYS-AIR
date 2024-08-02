<template>
	<div class="flex justify-between">
		<div class="relative w-[48%]">
			<NuxtImg :src="`/img/joinus/pagination/${index % totalPosts + 1}_sm.webp`" loading="lazy"
				class="w-[90%] h-[55vw] md:h-[290px]" alt="pagination-sub" />
			<div class="flex flex-col items-end absolute right-0 top-[60%] w-full">
				<AtomsCard class="w-[90%] rounded-[4vw] md:rounded-[20px]">
					<div class="flex flex-col p-[3vw] md:p-[15px] text-smbase md:text-base">
						<p>大人の楽器サック</p>
						<span class="text-[#DDDDDD] font-apple text-smbase md:text-base">Kazuho Ishida</span>
						<span class="text-smmini md:text-mini">石田 一帆</span>
						<span class="text-smtiny md:text-tiny">ショップ店員 / 24歳 / <br>挑戦楽器：サックス</span>
					</div>
				</AtomsCard>
			</div>
		</div>

		<div class="relative w-[48%] top-[40px]">
			<NuxtImg :src="`/img/joinus/pagination/${(index + 1) % totalPosts + 1}_sm.webp`" loading="lazy"
				class="w-[90%] h-[55vw] md:h-[290px]" alt="pagination-sub-right" />
			<div class="flex flex-col items-end absolute right-0 top-[60%] w-full">
				<AtomsCard class="w-[90%] rounded-[4vw] md:rounded-[20px]">
					<div class="flex flex-col p-[3vw] md:p-[15px] text-smbase md:text-base">
						<p>大人の楽器サック</p>
						<span class="text-[#DDDDDD] font-apple text-smbase md:text-base">Kazuho Ishida</span>
						<span class="text-smmini md:text-mini">石田 一帆</span>
						<span class="text-smtiny md:text-tiny">ショップ店員 / 24歳 / 挑戦楽器：サックス</span>
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