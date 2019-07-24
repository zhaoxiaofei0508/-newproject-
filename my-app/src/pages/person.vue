<template>
    <div>
        <Resetperson :newdata="arrperson"></Resetperson>
    </div>
</template>
<script>
import Resetperson from '../components/mine/resetperson'
export default {
    components:{
        Resetperson
    },
    data(){
        return {
            arrperson:[]
        }
    },
    created() {
        this.axios({
            url:"/link/cpydata",
            method:"get"
        }).then((ok)=>{
            // console.log(ok.data.myaccount[0]);
            this.arrperson=ok.data.myaccount[0];
        })
    },
}
</script>
<style scoped>

</style>
