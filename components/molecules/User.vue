<template>
	<div class="relative">
		<NuxtImg :src="imgUrl" loading="lazy" />
		<AtomsSemiRound :text="text" :color="color" class="absolute top-[5.4vw] md:top-[27px] left-0" />
		<AtomsTeacher :event="event" :time="time"
			class="absolute bottom-[2.6vw] md:bottom-[13px] left-[2.6vw] md:left-[13px]" />
	</div>
</template>

<script>
export default {
	props: [
		'text',
		'color',
		'imgUrl',
		'event',
		'time'
	]
}
</script>

<style scoped></style>