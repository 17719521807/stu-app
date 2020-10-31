<template>
  <div class="main-content">
      <keep-alive>
      <component :is="stuComponent"></component>
      </keep-alive>
  </div>
</template>

<script>
import studentAdd from "./studentAdd.vue"
import studentList from "./studentList.vue"
export default {
    components: {
        studentAdd,
        studentList
    },
    data() {
        return {
            stuInfos: [],
        }
    },
    computed: {
        stuComponent() {
            return this.$store.state.show == 'stuList' ? "studentList" : "studentAdd";
        }
    },
}
</script>

<style>

</style>