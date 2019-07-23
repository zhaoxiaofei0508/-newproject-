<template>
    <div>
        <Mysetitem v-for="(v,i) in arr" :key="i" :title="v.title" :calssname="v.calssname" :Tolink="v.Tolink"></Mysetitem>
    </div>
</template>
<script>
import Mysetitem from './mysetitem'
export default {
    components:{
        Mysetitem
    },
    data(){
        return{
            arr:[
                {title:"支付设置",calssname:"iconfont icon-zhifu",Tolink:"/pay_set"},
                {title:"收货地址",calssname:"iconfont icon-dizhi",Tolink:"/myaddress"},
                {title:"评价盒马",calssname:"iconfont icon-pingjia",Tolink:"/#"},
                {title:"清除缓存",calssname:"el-icon-delete",Tolink:"/#"},
                {title:"关于我们",calssname:"iconfont icon-guanyu",Tolink:"/#"},
                {title:"企业采购",calssname:"iconfont icon-caigou",Tolink:"/#"},
            ]
        }
    }
}
</script>
<style scoped>

</style>
