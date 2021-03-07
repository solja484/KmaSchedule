<template>
  <div>
    <b-button id="popover-target-1">
      Hover Me
    </b-button>
    <b-popover
      target="popover-target-1"
      triggers="hover"
      position="right"
      class="text-12"
    >
      <template #title>
        <b>Інтелектуальні системи</b>
      </template>
      <p class="my-1">
        <span class="badge badge-secondary mr-1">4 кред.</span>
        <span class="badge badge-secondary mr-1">120 год.</span>
        <span class="badge badge-secondary mr-1">4 рік</span>
        <span class="badge badge-success">Курс відбувся</span>
      </p>
      <p class="my-1">
        <span class="pill code">Професійно-орієнтована</span>
      </p>
      <p class="my-1 text-12">
        Факультет інформатики<br />
        Кафедра мультимедійних систем
      </p>
      <p class="my-1 text-12 bold">
        Тижні: 1-7, 9-15<br />
        Аудиторія: дистанційно
      </p>
    </b-popover>
  </div>
</template>

<script>
import { BButton, BPopover } from "bootstrap-vue";

export default {
  name: "CourseDetails",
  components: { BButton, BPopover }
};
</script>

<style scoped>
.text-12 {
  font-size: 12px;
}

.bold {
  font-weight: bolder;
}
</style>
