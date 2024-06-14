<template>
	<div class="inline-block p-[1.6vw] md:p-[8px] pr-[4.6vw] md:pr-[23px] bg-white rounded-r-full "
		:style="{ color: `${color}` }">
		<p class="text-[2.6vw] md:text-[13px]">{{ text }}</p>
	</div>
</template>

<script>
export default {
	props: [
		'text',
		'color',
	]
}
</script>