<template>
  <div class="gray-block my-1 p-2">
    <a class="text-16 m-0 link-black"
      ><span class="badge badge-secondary mr-2">09876</span>Інженерія
      програмного забезпечення БП-4 Весна 2021</a
    >
    <button class="btn btn-info btn-sm float-right">
      <i class="fa fa-download"></i> Завантажити
    </button>
  </div>
</template>

<script>
export default {
  name: "ScheduleListELem"
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_variables.scss";

.gray-block {
  border-radius: 4px;
  background: $gray-fill;
  border: 1px solid $gray-border;
}
.text-16 {
  font-size: 16px;
}

.info-button {
  background: $info !important;
  border-color: $info-border !important;
}

.link-black {
  color: black;
  cursor: pointer;
}
.link-black:active,
.link-black:hover,
.link-black:focus {
  color: black;
  cursor: pointer;
}
</style>
