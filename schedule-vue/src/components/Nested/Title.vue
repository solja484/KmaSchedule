<template>
  <div class="mx-5 mt-5 mb-3 ">
    <h2 class="mx-5">
      {{ message }}
      <small class="text-gray">{{ additional }}</small>
    </h2>
    <hr class="line-gray" />
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["message", "additional"]
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variables.scss";

.text-gray {
  color: $text-secondary;
}

.line-gray {
  color: $text-secondary;
}
</style>
