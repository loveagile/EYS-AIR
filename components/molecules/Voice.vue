<template>
	<AtomsCard class="flex flex-col rounded-t-[2vw] md:rounded-t-[10px]">
		<div class="flex justify-start w-full px-[3vw] md:px-[15px] pt-[3vw] md:pt-[15px] pb-[1vw] md:pb-[5px]">
			<NuxtImg :src="socialImg" loading="lazy" class="w-[8vw] md:w-[40px] h-[8vw] md:h-[40px] relative z-10"
				alt="social-img" />
			<NuxtImg :src="userImg" loading="lazy"
				class="w-[8vw] md:w-[40px] h-[8vw] md:h-[40px] relative left-[-1.6vw] md:left-[-8px]" alt="user-img" />
			<div class="flex flex-col ml-[2vw] md:ml-[10px]">
				<p class="text-smbase md:text-base">高谷 蒼汰</p>
				<span class="text-smtiny md:text-tiny tracking-tight">18分前</span>
			</div>
		</div>
		<p class="px-[2.4vw] md:px-[12px] pb-[4vw] md:pb-[20px] text-smtiny md:text-tiny text-start">
			代官山スタジオについての感想や、コースについての評価など。
			代官山スタジオについての感想や、コースについての評価など。
			代官山...
		</p>
		<NuxtImg :src="mainImg" loading="lazy" class="w-full h-[40vw] md:h-[200px]" alt="main-img" />
		<div class="flex flex-col w-full px-[2.4vw] md:px-[12px]">
			<div
				class="flex items-center justify-between pt-[2vw] md:pt-[10px] pb-[2vw] md:pb-[10px] w-full border-b-[1px] border-solid border-[#DDDDDD]">
				<div class="flex">
					<NuxtImg src="/img/voice/fb-icon-like.webp" loading="lazy"
						class="w-[5vw] md:w-[25px] h-[5vw] md:h-[25px] z-20" alt="like" />
					<NuxtImg src="/img/voice/fb-icon-love.webp" loading="lazy"
						class="w-[5vw] md:w-[25px] h-[5vw] md:h-[25px] relative z-10 left-[-1vw] md:left-[-5px]" alt="love" />
					<NuxtImg src="/img/voice/fb-icon-laugh.webp" loading="lazy"
						class="w-[5vw] md:w-[25px] h-[5vw] md:h-[25px] relative left-[-2vw] md:left-[-10px]" alt="laugh" />
				</div>
				<p class="text-[2.2vw] md:text-[11px]">
					コメント12件 シェア52件
				</p>
			</div>
			<div class="flex justify-between py-[2vw] md:py-[10px]">
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