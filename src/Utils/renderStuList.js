export default function(vm) {
    vm.axios.get("/api/student/findAll", {
        params: {
            appkey: 'lhf604110425_1590916475099'
        }
    }).then(res => {
        if (res.msg == '查询成功') {
            vm.$store.state.stuList = res.data;
        } else {
            alert(res.msg);
        }

    })
}