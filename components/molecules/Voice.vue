<template>
	<AtomsCard class="flex flex-col rounded-t-[4vw] md:rounded-t-[20px]">
		<div class="flex justify-start w-full p-[3vw] md:p-[15px]">
			<NuxtImg :src="socialImg" loading="lazy" class="w-[9vw] md:w-[45px] h-[9vw] md:h-[45px] relative z-10"
				alt="social-img" />
			<NuxtImg :src="userImg" loading="lazy"
				class="w-[9vw] md:w-[45px] h-[9vw] md:h-[45px] relative left-[-1.6vw] md:left-[-8px]" alt="user-img" />
			<div class="flex flex-col ml-[2vw] md:ml-[10px]">
				<p class="text-smbase md:text-base ">高谷 蒼汰</p>
				<span class="text-smtiny md:text-tiny">18分前</span>
			</div>
		</div>
		<p class="px-[2.4vw] md:px-[12px] pb-[3vw] md:pb-[15px] text-smmini md:text-mini text-start">
			代官山スタジオについての感想や、コースについての評価など。
			代官山スタジオについての感想や、コースについての評価など。
			代官山...
		</p>
		<NuxtImg :src="mainImg" loading="lazy" class="w-full h-[40vw] md:h-[200px]" alt="main-img" />
		<div class="flex flex-col w-full p-[2.4vw] md:p-[12px]">
			<div
				class="flex items-center justify-between pb-[2.4vw] md:pb-[12px] w-full border-b-[1px] border-solid border-[#DDDDDD]">
				<div class="flex">
					<NuxtImg src="/img/voice/fb-icon-like.webp" loading="lazy"
						class="w-[6vw] md:w-[30px] h-[6vw] md:h-[30px] z-20" alt="like" />
					<NuxtImg src="/img/voice/fb-icon-love.webp" loading="lazy"
						class="w-[6vw] md:w-[30px] h-[6vw] md:h-[30px] relative z-10 left-[-1vw] md:left-[-5px]" alt="love" />
					<NuxtImg src="/img/voice/fb-icon-laugh.webp" loading="lazy"
						class="w-[6vw] md:w-[30px] h-[6vw] md:h-[30px] relative left-[-2vw] md:left-[-10px]" alt="laugh" />
				</div>
				<p class="text-[2.2vw] md:text-[11px]">
					コメント12件 シェア52件
				</p>
			</div>
			<div class="flex justify-between py-[3vw] md:py-[15px]">
				<AtomsIcon img="/img/voice/like.webp" text="いいね!" />
				<AtomsIcon img="/img/voice/comment.webp" text="コメントする" />
				<AtomsIcon img="/img/voice/share.webp" text="シェア" />
			</div>
		</div>

	</AtomsCard>
</template>

<script>
export default {
	props: [
		'socialImg',
		'userImg',
		'mainImg',
	]
}
</script>

<style scoped></style>