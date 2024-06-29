<template>
	<div class="flex flex-col w-full">
		<div class="flex justify-end">
			<button v-show="isVisible" @click="scrollToTop"
				class=" bg-black bg-opacity-20 pl-[7vw] md:pl-[35px] pr-[6vw] md:pr-[30px] py-[4vw] md:py-[20px] transition-all">
				<NuxtImg src="/img/footer/up.webp" loading="lazy" alt="UpArrow"
					class="w-[2.4vw] md:w-[12px] h-[4.2vw] md:h-[24px]" />
			</button>
		</div>
		<div class="flex justify-between w-full bg-black bg-opacity-20 px-[2vw] md:px-[10px] py-[1.6vw] md:py-[8px]">
			<div class="flex justify-center items-center w-[49%] bg-white text-black relative z-50 hover:opacity-75">
				<NuxtLink to="tel:0120-978-900" rel="noopener noreferrer"
					class="flex justify-center items-center w-full py-[2vw] md:py-[10px]">
					<NuxtImg src="/img/footer/freedial.webp" loading="lazy" alt="FreeDial"
						class="w-[8.4vw] md:w-[42px] h-[5vw] md:h-[25px]" />
					<span class=" flex flex-col text-[8px] ml-[2vw] md:ml-[10px]">
						<strong class="text-[4.4vw] md:text-[22px] text-justify">0120-978-900</strong>
						<strong class="text-[2.8vw] md:text-[14px] text-justify mt-[0.4vw] md:mt-[2px]">電話受付 : 8:00~25:00</strong>
					</span>
				</NuxtLink>
			</div>
			<div class="relative w-[49%]">
				<NuxtLink to="/"
					class="reg-btn flex items-center justify-between px-[3vw] md:px-[15px] hover:opacity-75 h-full">
					<NuxtImg src="/img/user.webp" loading="lazy" class="w-[4.8vw] md:w-[24px] h-[6vw] md:h-[30px]" alt="user" />
					<p class="text-[4vw] md:text-[20px]">2,000円をGET</p>
					<NuxtImg src="/img/footer/forward.webp" loading="lazy" class="w-[2vw] md:w-[10px] h-[3.4vw] md:h-[17px]"
						alt="forward" />
				</NuxtLink>
				<span
					class="absolute w-[65%] text-center left-[50%] top-[-3vw] md:top-[-15px] bg-white translate-x-[-50%] text-[#FF6E6E] text-smtiny md:text-tiny px-[1vw] md:px-[5px] py-[0.8vw] md:py-[4px] rounded-full">
					簡易メンバー登録して
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isVisible: false,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.toggleVisibility)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.toggleVisibility)
	},
	methods: {
		toggleVisibility() {
			this.isVisible = window.scrollY > 0
		},
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}
}
</script>

<style scoped>
.reg-btn {
	text-decoration: none;
	background-color: #000;
	border: solid 2px #000;
	color: #fff;
	text-align: center;
	transition: 0.5s;
	position: relative;
}
</style>