<template>
    <div class="text-center line-height-5 m-5">
        <p><b>Користувач</b></p>
        <p>{{ user.name }}</p>
        <p><b>Роль</b></p>
        <p>{{ user.role }}</p>
        <p><b>Етап</b></p>
        <p>Презентації курсів</p>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                user: this.$store.getters["user"]
            };
        },
    }
</script>

<style scoped>

</style>