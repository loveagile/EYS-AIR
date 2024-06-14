<template>
    <h2 class="text-smtit md:text-tit text-center pt-[12.8vw] md:pt-[64px] pb-[7vw] md:pb-[35px] font-medium">
        {{ text }}<br>{{ text2 }}
    </h2>
</template>

<script>
export default {
    props: [
        'text',
        'text2',
    ]
}
</script>