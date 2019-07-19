<template>
    <div>
       <div class="wfa">
            <div class="wfb" @click="fun()">×</div>
            <div class="wfc">账户登录</div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        fun(){
            this.$router.go(-1);
        }
    }, 
}
</script>
<style scoped>
.wfa{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
    color:rgb(53, 51, 51);
}
.wfb{
    float: left;
    line-height: 1rem;

}
.wfc{
    width: 80%;
    float: left;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
}

</style>