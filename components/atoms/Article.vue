<template>
	<AtomsCard class="flex w-full rounded-[4vw] md:rounded-[20px]">
		<NuxtImg :src="img" loading="lazy" class="w-[35%] h-[34vw] md:h-[170px]" alt="article" />
		<div class="w-[65%] flex flex-col p-[2vw] md:p-[10px]">
			<div class="flex w-full justify-between text-[#999999] text-smtiny md:text-tiny">
				<span>2019/08/06</span>
				<span>石田 一帆</span>
			</div>
			<h6 class="text-[3vw] md:text-[15px] leading-[4vw] md:leading-[20px] my-[2.4vw] md:my-[12px]">
				第１回：記事タイトル記事タイトル記事タイトル
			</h6>
			<p class="text-[2.8vw] md:text-[14px] leading-[4vw] md:leading-[20px]">
				記事本文の抜粋。記事本文の抜粋。<br>
				記事本文の抜粋。記事本文の抜粋。<br>
				記事本文の抜粋。...
			</p>
		</div>
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