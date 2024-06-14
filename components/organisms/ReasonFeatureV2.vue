<template>
	<div class="relative z-10 mt-[4vw] md:mt-[20px]">
		<AtomsTitle :text="text" startColor="#FF6E6E" endColor="#FFBCDD" class="relative top-[3vw] md:top-[15px]" />
		<NuxtImg :src="img" loading="lazy" class="w-full h-[50vw] md:h-[250px]" alt="feature-img" />
		<p class="text-center bg-white border-[2px] border-solid border-[#F6F6F6] text-[4vw] md:text-[20px] leading-[5vw] md:leading-[25px] py-[15px] rounded-[2vw] md:rounded-[10px] w-[106%] left-[-3%] relative"
			v-html="desc">
		</p>
	</div>
</template>

<script>
export default {
	props: [
		'text',
		'img',
		'desc',
	]
}
</script>