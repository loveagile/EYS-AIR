<template>
	<div class="relative px-[5.4vw] md:px-[27px]" :class="[index ? 'mt-[36vw] md:mt-[180px]' : '']">
		<div class="relative flex flex-col items-center justify-center z-10">
			<AtomsParallel :text="titTxt" :startColor="startColor" :endColor="endColor" class="relative z-20" />
			<div class="relative flex items-center flex-col">
				<NuxtImg :src="topImg" loading="lazy" class="relative top-[-3.6vw] md:top-[-18px] w-full h-[53vw] md:h-[265px]"
					alt="top-img" />
				<div class="absolute transform translate-y-[-55%] flex flex-col items-center w-[85%] top-[100%]">
					<NuxtImg :src="iPadImg" loading="lazy" class="w-full h-[51vw] md:h-[255px]" alt="ipad-img" />
					<div class="absolute bottom-[3vw] md:bottom-[15px] w-[90%] border-[1px] border-solid border-white">
						<AtomsGotoButton :btnText="btnTxt" :linkUrl="linkUrl" />
					</div>
				</div>
			</div>
		</div>
		<div v-if="index % 2 === 0">
			<NuxtImg :src="ringImg" loading="lazy"
				class="absolute w-[32vw] md:w-[160px] h-[32vw] md:h-[160px] right-[-10vw] md:right-[-50px] top-[-8vw] md:top-[-40px]"
				alt="rel-ring" />
		</div>
		<div v-else>
			<NuxtImg :src="ringImg" loading="lazy"
				class="absolute w-[32vw] md:w-[160px] h-[32vw] md:h-[160px] left-[-10vw] md:left-[-50px] top-[-8vw] md:top-[-40px]"
				alt="rel-ring" />
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'index',
		'titTxt',
		'startColor',
		'endColor',
		'topImg',
		'iPadImg',
		'linkUrl',
		'btnTxt',
		'ringImg',
	]
}
</script>