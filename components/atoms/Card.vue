<template>
	<div class="card-outline flex justify-center items-center bg-white">
		<slot></slot>
	</div>
</template>

<style scoped>
.card-outline {
	box-shadow: 5px 8px 5px 0 rgba(0, 0, 0, 0.05);
	border: none;
}
</style>