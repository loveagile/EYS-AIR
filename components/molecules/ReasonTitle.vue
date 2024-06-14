<template>
	<div class="relative flex flex-col items-center">
		<NuxtImg src="/img/reason/reason.webp" loading="lazy" class="w-[40vw] md:w-[200px] h-[8vw] md:h-[40px]"
			alt="reason" />
		<div class="relative bottom-[2vw] md:bottom-[10px]">
			<AtomsParallel :text="number" startColor="#7799FF" endColor="#77DDFF" />
		</div>
	</div>
	<h2 class="text-smtit md:text-tit text-center" v-html="text"></h2>
</template>

<script>

export default {
	props: [
		'number',
		'text',
	]
}
</script>

<style scoped></style>