<template>
	<div class="flex flex-col justify-center items-center mb-[3vw] md:mb-[15px] relative">
		<AtomsReasonParallel :text="titTxt" :startColor="startColor" :endColor="endColor" />
		<span class="text-smmini md:text-mini pt-[3vw] md:pt-[15px]">{{ subTxt }}</span>
		<p class="text-smsub md:text-sub leading-[5vw] md:leading-[25px] text-center pb-[4vw] md:pb-[20px]" v-html="text">
		</p>
		<NuxtImg :src="imgUrl" loading="lazy" class="w-[95%] h-[101vw] md:h-[505px]" alt="reason-feature" />
		<a :href="linkUrl"
			class="button py-[1vw] md:py-[5px] block w-3/5 absolute left-[50%] translate-x-[-50%] bottom-[6vw] md:bottom-[30px]">
			<span class="text-smbase md:text-base py-[1.8vw] md:py-[9px]">詳細を見る</span>
			<NuxtImg src="/img/arrow.webp" loading="lazy"
				class="inline absolute right-[2vw] md:right-[10px] top-[50%] translate-y-[-50%] w-[3.2vw] md:w-[16px] h-[1.4vw] md:h-[7px]"
				alt="arrow" />
		</a>
	</div>
</template>

<script>
export default {
	props: [
		'index',
		'titTxt',
		'startColor',
		'endColor',
		'subTxt',
		'text',
		'imgUrl',
		'linkUrl'
	]
}
</script>

<style scoped>
.button {
	text-decoration: none;
	background-color: #000;
	border: solid 2px #000;
	color: #fff;
	display: block;
	margin: 0 auto;
	text-align: center;
	transition: 0.5s;
}

.btnImg {
	display: inline;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
}

.button:hover {
	color: #fff;
	background: #fff;
	color: #000;
	border: solid 2px #000;
}
</style>