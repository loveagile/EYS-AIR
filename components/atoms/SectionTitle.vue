<template>
    <h2 class="text-smtit md:text-tit text-center font-medium">
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