<template>
  <div class="main-header">
        <div class="duyi-title">
        <img src="@/assets/images/logo.png" alt="">
        <span>渡一教育</span>
    </div>
    <div class="username" v-if="$store.state.username">
        <div class="name">{{$store.state.username}}</div>
        <div class="break"><router-link to="login">退出</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>