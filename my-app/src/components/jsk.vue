<template>
    <div>
        <div   class="btn">
           <input type="checkbox" v-model="allChecked">   <span style="font-size:.8rem">合计</span>&nbsp;<span style="font-size:.5rem">:￥0</span>   <input type="button" value="结算" style="height:1.2rem;width:2rem;
           border:none;outline:none;position:absolute;top:0px;right:0px;">

        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            allChecked:false,
            }
    }
}
</script>



<style scoped>
.btn{height:1.2rem;width:100%;border-top:1px solid gray;position:fixed;bottom:1.4rem;background:white;line-height:1.2rem}
</style>
