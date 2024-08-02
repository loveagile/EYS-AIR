<template>
	<div class="flex flex-col justify-between items-center">
		<div class="relative top-[15px]">
			<AtomsHeadTitle :text="text" startColor="#55CCAA" endColor="#88DD77" />
		</div>
		<AtomsCard class="rounded-full">
			<div
				class="flex justify-center items-center text-smtit md:text-tit bg-white rounded-full text-green font-medium w-[22vw] md:w-[110px] h-[22vw] md:h-[110px]">
				{{ tit }}
			</div>
		</AtomsCard>
	</div>
</template>

<script>
export default {
	props: [
		'text',
		'tit',
	]
}
</script>