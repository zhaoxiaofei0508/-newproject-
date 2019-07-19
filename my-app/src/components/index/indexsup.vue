<template>
    <div class="sup">
        <h1>{{SupTitle}}</h1>
        <p>{{SupContent}}</p>
        <img :src="SupImg">
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        SupTitle:String,
        SupContent:String,
        SupImg:String ,
        Type:String
    }
}
</script>
<style scoped>
.sup{
    box-sizing: border-box;
    width: 50%;
    float: left;
    border-right:1px solid #f7f7f7;
    padding: 5px 0.2rem 0;
    background-color: white;
}
.sup h1{
    line-height: 0.44rem;
    font-size: 0.26rem;
}
.sup p{
    display: block;
    font-size: 0.24rem;
    height: 0.24rem;
    line-height: 0.24rem;
    overflow: hidden;
    color: #a0a0a0;
}
.sup img{
    display: block;
    width: 100%;
}
</style>
