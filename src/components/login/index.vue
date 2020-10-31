<template>
  <div class="stu-login">
    <div class="form">
        <h2>登录
            <router-link :to="{name:'regisiter'}">注册</router-link>
        </h2>
        <div>
            <label for="account">
                账号:
            </label>
            <input type="text" v-model="loginInfo.account">
        </div>
        <div>
            <label for="password">密码:</label>
            <input type="password" v-model="loginInfo.password">
        </div>
        <div>
            <label for=""></label>
            <input class="btn" type="submit" value="提交" @click="login">
            <input class="btn" type="reset" value="重置" @click="reset">
        </div>
        </div>
        <custom-alert 
        v-if="alertShow" 
        :color="alertColor"  
        @alertevent="alertEvent($event)" 
        :backgroundColor="alertBackColor"
        :text="alertText"
        stopTime="1000"
        />
  </div>
</template>

<script>
import qs from "qs";
import customAlert from "../customAlert/index.vue"
export default {
    components: {
        customAlert,
    },
    data() {
        return {
            loginInfo: {
                account: '',
                password: ''
            },
            alertShow: false,
            alertBackColor: '',
            alertText: '',
            alertColor: ''
        }
    },
    methods: {
        alertEvent(es) {
                this.alertShow = false;
                if(es.text == '登录成功') {
                    this.$router.push({ name: 'main' });
                }
        },
        reset() {
            this.loginInfo.account = '';
            this.loginInfo.password = ''; 
        },
        login() {
            const data = {
                appkey: 'lhf604110425_1590916475099',
                ...this.loginInfo
            }
            this.axios.post("/api/student/stuLogin", qs.stringify(data)).then(res => {
                if(res.msg == '登录成功') {
                    this.$store.commit('commitUsername', {
                    username: this.loginInfo.account
                });
                }
                this.alertInfo(res);
                this.alertShow = true;
            })

        },
        alertInfo(res) {
            if(res.status == 'success') {
                this.alertBackColor = 'green';
            }else {
                this.alertBackColor = 'red';

            }
                this.alertColor = 'white';
                this.alertText = res.msg;
        }
    }
}
</script>

<style scoped src="@/assets/css/login/index.css">

</style>