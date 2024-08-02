<template>
	<div class="my-[7vw] md:my-[35px]">
		<MoleculesTopPageItem :mainImg="`/img/joinus/pagination/${index}.webp`" .webp
			:relImg="`/img/joinus/pagination/${index}_rel.webp`" text="大人の楽器サックスに憧れて。いきなり「ルパン三世’79」に挑戦？"
			nameEn="Kazuho Ishida" nameJp="石田 一帆" details="ショップ店員 / 24歳 / 挑戦楽器：サックス" />
		<MoleculesBottomPageItem :index="index" :totalPosts="totalPosts" class="mt-[57vw] md:mt-[285px]" />
	</div>
</template>

<script>
export default {
	props: [
		'index',
		'totalPosts',
	]
}
</script>