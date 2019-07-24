<template>
    <div>
        <div class="ohead">
          <span @click="fun()">&lt;</span>
            <h3>新增收货地址</h3>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        fun(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
.ohead{
    /* display: flex; */
    /* flex-direction: row; */
    width: 100%;
    height: .81rem;
    border-bottom: 1px solid #dedede;
}
span{
    float: left;
    font-size: .5rem;
    color: #3b9ada;
    margin-left: 10px;
}
h3{
    float: left;
    font-size: .34rem;
    color: #050505;
    line-height: .81rem;
    margin-left: 2.7rem;
}    
</style>