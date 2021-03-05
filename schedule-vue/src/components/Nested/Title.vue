<template>
    <div class="m-5">
    <h2 >{{message}}
        <small class="text-gray">{{additional}}</small>
    </h2>
    <hr class="line-gray">
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: ["message", "additional"]
    }
</script>

<style scoped lang="scss">
    @import '../../assets/scss/_variables.scss';

    .text-gray {
        color:$text-secondary;
    }

    .line-gray{
        color:$text-secondary;
    }
</style>