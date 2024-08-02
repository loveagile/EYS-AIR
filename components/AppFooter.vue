<script setup lang="ts">
</script>

<template>
	<footer class="footercontainer">
		<div class="bg-black text-white p-[11.4vw] md:p-[57px]">
			<NuxtImg src="/img/footer/logo.webp" loading="lazy" class="mx-auto w-[37vw] md:w-[185px] h-[21vw] md:h-[105px]"
				alt="footer-logo" />
			<div class="flex flex-col mx-auto items-center my-[9.6vw] md:my-[48px]">
				<span class="text-smmini md:text-mini">クレイジー特典満載！</span>
				<p class="text-center text-[4.8vw] md:text-[24px] mt-[2vw] md:mt-[10px] leading-[6vw] md:leading-[30px]">
					EYSが提供する<br>オンラインアカデミー
				</p>
			</div>
			<div class="flex justify-between flex-wrap">
				<div class="mb-[4vw] md:mb-[20px]">
					<h4 class="text-smbase md:text-base mb-[1vw] md:mb-[5px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
				<div>
					<h4 class="text-smbase md:text-base mb-[1vw] md:mb-[5px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
				<div>
					<h4 class="text-smbase md:text-base mb-[1vw] md:mb-[5px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
				<div>
					<h4 class="text-smbase md:text-base mb-[1vw] md:mb-[5px]">フッタリンク大</h4>
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
					<AtomsFootLink txt="フッタリンク小" linkUrl="/" />
				</div>
			</div>

			<p class="text-center text-[2.2vw] md:text-[11px] mt-[19vw] md:mt-[95px] mb-[14vw] md:mb-[70px]">©2nd Community
				inc. All rights
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