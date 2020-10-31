<template>
  <div class="stu-regisiter">
        <div class="form">
        <h2>注册
            <router-link to="login">登录</router-link>
        </h2>
        <div>
            <label for="username">
                用户名:
            </label>
            <input type="text" v-model="regisiterInfo.username">
        </div>
        <div>
            <label for="account">
                账号:
            </label>
            <input type="text" v-model="regisiterInfo.account">
        </div>
        <div>
            <label for="password">密码:</label>
            <input type="password" v-model="regisiterInfo.password">
        </div>
        <div>
            <label for="rePassword">确认密码:</label>
            <input type="password" v-model="regisiterInfo.rePassword">
        </div>
        <div>
            <label for=""></label>
            <input class="btn" type="submit" value="注册" @click="regisiterRequest">
            <input class="btn" type="reset" value="重置" @click="reset">
        </div>
    </div>
    <custom-alert 
    v-if="alertShow" 
    @alertevent="alertShow = false"
    :text="alertText" 
    :color="alertColor"
    :backgroundColor="alertBackColor"
     />
  </div>
</template>

<script>
import resetForm from "@/Utils/resetForm.js";
import customAlert from "../customAlert/index.vue"
import qs from "qs";
export default {
    components: {
        customAlert,
    },
    data() {
        return {
            regisiterInfo: {
                username: '',
                account: '',
                password: '',
                rePassword: ''
            },
            alertShow: false,
            alertText: '',
            alertColor: '',
            alertBackColor: ''
        }
    },
    methods: {
        regisiterRequest() {
            const finalData = {
                appkey: 'lhf604110425_1590916475099',
                ...this.regisiterInfo
            }
            try {
            this.axios.post('/api/student/stuRegister', qs.stringify(finalData)).then(res => {
            this.alertInfo(res);
            });
            }catch(error) {
            this.alertInfo(error);
            }
            this.alertShow = true;
        },
        reset() {
            resetForm(this.regisiterInfo);
        },
        alertInfo(res) {
            if(res.status == 'success') {
                this.alertBackColor = 'green';
            }else {
                this.alertBackColor = 'green';
            }
            this.alertColor = 'white';
            this.alertText = res.msg;
        }
    }
}
</script>

<style scoped src="@/assets/css/login/index.css">

</style>