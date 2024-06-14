<template>
	<ul class="flex flex-col">
		<li>
			<AtomsMenuLink linkUrl="/" txt="トップ" img="/img/header/top.webp" hoverImg="/img/header/top_hover.webp" />
		</li>
		<li>
			<AtomsMenuLink linkUrl="/" txt="スク婚" img="/img/header/love.webp" hoverImg="/img/header/love_hover.webp" />
		</li>
		<li>
			<AtomsMenuLink linkUrl="/" txt="コミュニティ" img="/img/header/community.webp"
				hoverImg="/img/header/community_hover.webp" />
		</li>
		<li>
			<AtomsMenuLink linkUrl="/" txt="イベント" img="/img/header/event.webp" hoverImg="/img/header/event_hover.webp" />
		</li>
		<li>
			<AtomsMenuLink linkUrl="/" txt="パフォーマンス" img="/img/header/performance.webp"
				hoverImg="/img/header/performance_hover.webp" />
		</li>
		<li>
			<AtomsMenuLink linkUrl="/" txt="ワークショップ" img="/img/header/workshop.webp"
				hoverImg="/img/header/workshop_hover.webp" />
		</li>
		<li>
			<AtomsMenuGroup @click="musicToggleNav" txt="音楽" img="/img/header/music.webp"
				hoverImg="/img/header/music_hover.webp" :isClicked="musicIsOpen" />
			<div v-if="musicIsOpen">
				<AtomsSubMenu linkUrl="/" txt="音楽トップ" />
				<AtomsSubMenu linkUrl="/" txt="初めての方へ" />
				<AtomsSubMenu linkUrl="/" txt="コース一覧" />
				<AtomsSubMenu linkUrl="/" txt="料金/システム" />
				<AtomsSubMenu linkUrl="/" txt="楽器プレゼント" />
				<AtomsSubMenu linkUrl="/" txt="Q&A" />
				<AtomsSubMenu linkUrl="/" txt="講師募集" />
			</div>
		</li>
		<li>
			<AtomsMenuGroup @click="wineToggleNav" txt="ワイン" img="/img/header/wine.webp"
				hoverImg="/img/header/wine_hover.webp" :isClicked="wineIsOpen" />
			<div v-if="wineIsOpen">
				<AtomsSubMenu linkUrl="/" txt="ワイントップ" />
				<AtomsSubMenu linkUrl="/" txt="初めての方へ" />
				<AtomsSubMenu linkUrl="/" txt="料金/システム" />
				<AtomsSubMenu linkUrl="/" txt="ワイングラスプレゼント" />
				<AtomsSubMenu linkUrl="/" txt="Q&A" />
				<AtomsSubMenu linkUrl="/" txt="講師募集" />
			</div>
		</li>
		<li>
			<AtomsMenuGroup @click="teaToggleNav" txt="茶道" img="/img/header/tea.webp" hoverImg="/img/header/tea_hover.webp"
				:isClicked="teaIsOpen" />
			<div v-if="teaIsOpen">
				<AtomsSubMenu linkUrl="/" txt="茶道トップ" />
				<AtomsSubMenu linkUrl="/" txt="初めての方へ" />
				<AtomsSubMenu linkUrl="/" txt="料金/システム" />
				<AtomsSubMenu linkUrl="/" txt="茶釜・畳プレゼント" />
				<AtomsSubMenu linkUrl="/" txt="Q&A" />
				<AtomsSubMenu linkUrl="/" txt="講師募集" />
			</div>
		</li>
		<li>
			<AtomsMenuGroup @click="potteryToggleNav" txt="陶芸" img="/img/header/pottery.webp"
				hoverImg="/img/header/pottery_hover.webp" :isClicked="potteryIsOpen" />
			<div v-if="potteryIsOpen">
				<AtomsSubMenu linkUrl="/" txt="陶芸トップ" />
				<AtomsSubMenu linkUrl="/" txt="初めての方へ" />
				<AtomsSubMenu linkUrl="/" txt="料金/システム" />
				<AtomsSubMenu linkUrl="/" txt="焼き窯プレゼント" />
				<AtomsSubMenu linkUrl="/" txt="Q&A" />
				<AtomsSubMenu linkUrl="/" txt="講師募集" />
			</div>
		</li>
	</ul>
</template>

<script lang="ts" setup>
const musicIsOpen = useState('musicIsOpen', () => false);
function musicToggleNav(event: MouseEvent): void {
	event.preventDefault();
	musicIsOpen.value = !musicIsOpen.value;
}

const wineIsOpen = useState('wineIsOpen', () => false);
function wineToggleNav(event: MouseEvent): void {
	event.preventDefault();
	wineIsOpen.value = !wineIsOpen.value;
}

const teaIsOpen = useState('teaIsOpen', () => false);
function teaToggleNav(event: MouseEvent): void {
	event.preventDefault();
	teaIsOpen.value = !teaIsOpen.value;
}

const potteryIsOpen = useState('potterIsOpen', () => false);
function potteryToggleNav(event: MouseEvent): void {
	event.preventDefault();
	potteryIsOpen.value = !potteryIsOpen.value;
}
</script>