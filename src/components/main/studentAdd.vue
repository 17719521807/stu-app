<template>
    <div class="student-add">
    <div id="addStu">
        <div><label for="name">姓名</label><input v-model="stuInfo.name" type="text"></div>
        <div>
            <label for="male">性别</label>
            <label for="male" class="sex">男</label>
            <input type="radio" value="0" v-model="stuInfo.sex">
            <label for="female" class="sex">女</label>
            <input type="radio"  value="1" v-model="stuInfo.sex">
        </div>
        <div><label for="email">邮箱</label><input type="email"   v-model="stuInfo.email"></div>
        <div><label for="sNo">学号</label><input type="text"   v-model="stuInfo.sNo"></div>
        <div><label for="birth">出生年</label><input type="text"   v-model="stuInfo.birth"></div>
        <div><label for="phone">电话号码</label><input type="text"  v-model="stuInfo.phone"></div>
        <div><label for="address">地址</label><input type="text"  v-model="stuInfo.address"></div>
        <div><button id="submit"  @click="commitAddStu">提交</button><button @click="reset">重置</button></div>
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
import customAlert from "../customAlert/index.vue"
import renderStuList from "@/Utils/renderStuList.js"
import resetForm from "@/Utils/resetForm.js"
export default {
    components: {
        customAlert,
    },
    data() {
        return {
            stuInfo: {
            name: '',
            sex: '',
            email: '',
            sNo: '',
            birth: '',
            phone: '',
            address: ''
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
                if(es.text == '添加成功') {
                    renderStuList(this);
                    this.reset();
                }
        },
        commitAddStu() {
            this.axios.get("/api/student/addStudent", {
                params: {
                    appkey: 'lhf604110425_1590916475099',
                    ...this.stuInfo,
                }
            }).then(res => {
                this.alertShow = true;
                this.alertInfo(res);
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
        },
        reset() {
            resetForm(this.stuInfo);
        }
    }
}
</script>

<style>

</style>