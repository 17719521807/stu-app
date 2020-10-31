<template>
    <div class="change-student">
    <div id="changeStudent">
    <span id="close" @click="$emit('close')">X</span>
    <div><label for="change-name">姓名</label><input type="text" id="change-name" v-model="stuInfo.name"></div>
    <div>
        <label for="change-male">性别</label>
        <label for="change-male" class="sex">男</label>
        <input type="radio" id="change-male" value="0" v-model="stuInfo.sex">
        <label for="change-female" class="sex">女</label>
        <input type="radio" id="change-female" value="1" v-model="stuInfo.sex">
    </div>
    <div><label for="change-email">邮箱</label><input type="email" id="change-email" v-model="stuInfo.email"></div>
    <div><label for="change-sNo">学号</label><input type="text" id="change-sNo"  disabled></div>
    <div><label for="change-birth">出生年</label><input type="text" id="change-birth" v-model="stuInfo.birth"></div>
    <div><label for="change-phone">电话号码</label><input type="text" id="change-phone" v-model="stuInfo.phone"></div>
    <div><label for="change-address">地址</label><input type="text" id="change-address" v-model="stuInfo.address"></div>
    <div><button id="submit" @click="$emit('editstu', stuInfo)">提交</button><button @click="reset">重置</button></div>
</div>
    </div>
</template>

<script>
import resetForm from "@/Utils/resetForm.js"
export default {
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
            }
        }
    },
    methods: {
        reset() {
            resetForm(this.stuInfo);
        }
    }
}
</script>

<style>

</style>