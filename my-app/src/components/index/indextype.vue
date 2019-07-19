<template>
    <div class="Classify">
        <img :src="ClassifyImg">
        <p>{{ClassifyTitle}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        ClassifyImg:String,
        Id:Number,
        ClassifyTitle:String,
        Type:String
    }
}
</script>
<style scoped>
.Classify{
    width: 20%;
    box-sizing: border-box;
    padding: 0  0.2rem 4px;
    float: left;
}
.Classify img{
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
}
.Classify p{
    font-size: 0.24rem;
    line-height: 0.56rem;
    text-align: center;
    overflow: hidden; 
}
</style>
