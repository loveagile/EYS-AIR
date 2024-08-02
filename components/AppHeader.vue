<template>
	<header>
		<div class="menu-bar flex flex-col fixed top-0 w-full max-w-[500px] border-[1px] border-[#999999] z-[9999]"
			:class="navIsOpen ? 'scrollbar h-screen min-h-full overflow-y-auto bg-black' : ''">
			<div class="flex justify-between border-b-[1px] border-[#DDDDDD] p-[2.6vw] md:p-[13px]"
				:class="[navIsOpen ? 'bg-[#4A4A4A]' : 'bg-white']">
				<NuxtLink to="/" class="flex items-center">
					<NuxtImg :src="navIsOpen ? '/img/logo_air_clicked.webp' : '/img/logo_air.webp'" loading="lazy"
						class="w-[37vw] md:w-[185px] h-[8.8vw] md:h-[44px]" alt="Logo" />
					<span class="text-smtiny md:text-tiny ml-[3vw] md:ml-[12px]"
						:class="[navIsOpen ? 'text-white' : 'text-black']">オンラインアカデミー</span>
				</NuxtLink>
				<button @click="toggleNav" class="flex flex-col justify-center relative" aria-label="hamburger_menu">
					<span class="w-[5.4vw] md:w-[27px] h-[0.4vw] md:h-[2px] transition-all duration-300 ease-linear"
						:class="navIsOpen ? 'translate-y-[1.2vw] md:translate-y-[6px] rotate-[45deg] bg-white' : 'origin-left bg-[#707070]'">
					</span>
					<span
						class="w-[5.4vw] md:w-[27px] h-[0.4vw] md:h-[2px] mt-[2vw] md:mt-[10px] transition-all duration-300 ease-linear"
						:class="navIsOpen ? 'translate-y-[-1.2vw] md:translate-y-[-6px] -rotate-[45deg] bg-white' : 'origin-left bg-[#707070]'">
					</span>
				</button>
			</div>
			<div v-if="navIsOpen">
				<OrganismsMenuList />
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
const navIsOpen = useState('navIsOpen', () => false);

function toggleNav(event: MouseEvent): void {
	event.preventDefault();
	navIsOpen.value = !navIsOpen.value;
}
</script>

<style scoped>
.menu-bar {
	left: 0;
}

@media (min-width: 500px) {
	.menu-bar {
		left: calc(50% - 250px);
	}
}
</style>