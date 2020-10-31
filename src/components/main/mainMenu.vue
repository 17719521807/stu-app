<template>
  <div class="main-menu">
          <p>
            学生管理
        </p>
        <ul>
            <li v-for="(item, index) in menuList" :key="item.name" @click="commitShow(item.name, index)" :class="{active: item.active}">{{item.content}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        menuList: [{content: '学生列表', name: 'stuList', active: false}, {content: '新增学生', name: 'stuAdd', active: false}],
    }
  },
  methods: {
    commitShow(show, index) {
      this.$store.commit("commitShow", {show,});
      for(const item in this.menuList) {
        this.menuList[item].active = false;
      }
      this.menuList[index].active = true;
    }
  }
}
</script>

<style>

</style>