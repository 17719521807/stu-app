<template>
    <div class="student-list">
    <ul class="row">
        <li>学号</li>
        <li>姓名</li>
        <li>性别</li>
        <li>邮箱</li>
        <li>年龄</li>
        <li>电话</li>
        <li>地址</li>
        <li>操作</li>
    </ul>
    <div class="stu-info">
        <ul v-for="(stu, index) in $store.state.stuList" :key="stu.id">
            <li>{{stu.sNo}}</li>
            <li>{{stu.name}}</li>
            <li>{{stu.sex == 0 ? "男" : "女"}}</li>
            <li>{{stu.email}}</li>
            <li>{{new Date().getFullYear() -  stu.birth}}</li>
            <li>{{stu.phone}}</li>
            <li>{{stu.address}}</li>
            <li>
                <button id="change" @click="openEdit(index)">编辑</button>
                <button id="remove" @click="removeStu(stu.sNo)">删除</button>
            </li>                                                                                                                    
        </ul>
    </div>
    <change-student v-if="csShow" @close="csShow = false" @editstu="editStu($event)" />
    <custom-alert 
    :text="alertText"
    :color="alertColor"
    :backgroundColor="alertBackColor"
    v-if="alertShow"
    @alertevent="alertEvent($event)"
    />
</div>
</template>

<script>
import changeStudent from "./changeStudent.vue"
import renderStuList from "@/Utils/renderStuList.js"
import customAlert from "../customAlert/index.vue"
export default {
    components: {
        changeStudent,
        customAlert
    },
    data() {
        return {
            stuInfos: [],
            csShow: false,
            editIndex: 0,
            alertText: '',
            alertColor: '',
            alertBackColor: '',
            alertShow: false,
        }
    },
    created() {
        renderStuList(this);
    },
    methods: {
        alertEvent(es) {
            this.alertShow = false;
            if(es.text.indexOf('成功') != -1) {
                renderStuList(this);
                es.text == '修改成功' ? this.csShow = false : '';
            }
        },
        editStu(stuInfo) {
            this.axios.get('/api/student/updateStudent', {
                params: {
                    appkey: 'lhf604110425_1590916475099',
                    ...stuInfo,
                    sNo: this.$store.state.stuList[this.editIndex].sNo
                }
            }).then(res => {
                this.alertShow = true;
                this.alertInfo(res);
            });
        },
        openEdit(index){
            this.editIndex = index;
            this.csShow = true;
        },
        removeStu(sNo) {
            this.axios.get("/api/student/delBySno", {
                params: {
                appkey: 'lhf604110425_1590916475099',
                sNo,
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
        }
    }
}
</script>

<style>

</style>