<template>
	<AtomsCard class="flex w-full rounded-[4vw] md:rounded-[20px]">
		<div class="w-[45%] flex flex-col p-[2.8vw] md:p-[14px]">
			<p class="font-apple text-[#DDDDDD] text-end w-full text-[4.8vw] md:text-[24px]">Kazuho Ishida</p>
			<p class="text-[4vw] md:text-[20px] mb-[2vw] md:mb-[10px]">石田 一帆</p>
			<span class="text-smtiny md:text-tiny">ショップ店員 / 24歳</span>
		</div>
		<NuxtImg :src="img" loading="lazy" class="w-[55%] h-full" alt="player" />
	</AtomsCard>
</template>

<script>
export default {
	props: [
		'img',
	]
}
</script>

<style scoped></style>