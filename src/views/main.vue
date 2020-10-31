<template>
  <div id="main">
    <stu-main />
  </div>
</template>

<script>
import stuMain from "@/components/main/index.vue"
export default {
  components: {
    stuMain,
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next(vm => {
      console.log(vm.$store.state);
      if(!vm.$store.state.username) {
        vm.$router.replace({name: 'login'});
    }
    })
  }
}
</script>

<style>

</style>