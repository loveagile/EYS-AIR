<script setup lang="ts">
</script>

<template>
	<footer class="footercontainer">
		<div class="bg-black text-white p-[12vw] md:p-[60px]">
			<NuxtImg src="/img/footer/logo.webp" loading="lazy" class="mx-auto w-[37vw] md:w-[185px] h-[21vw] md:h-[105px]"
				alt="footer-logo" />
			<div class="flex flex-col mx-auto items-center my-[9.6vw] md:my-[48px]">
				<span class="text-smmini md:text-mini">クレイジー特典満載！</span>
				<p class="text-center text-[4.8vw] md:text-[24px] mt-[2vw] md:mt-[10px] leading-[6vw] md:leading-[30px]">
					EYSが提供する<br>オンラインアカデミー
				</p>
			</div>
			<div class="flex justify-between flex-wrap">
				<div class="mb-[8vw] md:mb-[40px]">
					<h4 class="text-smbase md:text-base mb-[3vw] md:mb-[15px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
				<div>
					<h4 class="text-smbase md:text-base mb-[3vw] md:mb-[15px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
				<div>
					<h4 class="text-smbase md:text-base mb-[3vw] md:mb-[15px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
				<div>
					<h4 class="text-smbase md:text-base mb-[3vw] md:mb-[15px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
			</div>

			<p class="text-center text-[2.2vw] md:text-[11px] my-[18.4vw] md:my-[92px]">©2nd Community inc. All rights
				reserved.</p>
		</div>
		<MoleculesContact class="contact fixed bottom-0 z-50" />
	</footer>
</template>

<style scoped>
.contact {
	max-width: 500px;
	left: 0;
}

@media (min-width: 500px) {
	.contact {
		left: calc(50% - 250px);
	}
}
</style>