<template>
  <div class="stu-main">
      <main-header />
      <main-menu />
      <main-content />
  </div>
</template>

<script>
import mainHeader from "./mainHeader"
import mainContent from "./mainContent"
import mainMenu from "./mainMenu"
export default {
    components: {
        mainHeader,
        mainContent,
        mainMenu,
    }
}
</script>

<style scoped src="@/assets/css/main/index.css">

</style>