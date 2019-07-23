<template>
    <div class="Indexlist">
        <img class="Indexlistimg" :src="ShopImg">
        <div class="IndexlistBox">
            <h1>{{ShopTitle}}</h1>
            <p>{{ShopDetails}}</p>
            <div class="Indexlistbox">
                <span>{{ShopPrice}}</span>
                <img src="../../../static/indeximg/shoppingcar.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        ShopImg:String,
        ShopTitle:String,
        ShopPrice:String,
        ShopDetails:String
    }
}
</script>
<style scoped>
.Indexlist{
    width: 47%;
    height: 5.05rem;
    margin:0.2rem 1.5% 0;
    float: left;
    background: white;
    border-radius: 0.2rem;
}
.IndexlistBox{
    padding: 0.14rem 0.2rem 5px;
}
.Indexlist .Indexlistimg{
    display: block;
    width: 100%;
}
.Indexlist h1{
    font-size: 0.20rem;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    font-weight: 100;
}
.Indexlist p{
    font-size: 0.20rem;
    height: 0.24rem;
    line-height: 0.24rem;
    overflow: hidden;
    color: #a9a9a9;
}
.Indexlistbox{
    height: 0.7rem;
    display: flex;
    line-height: 0.7rem;
    justify-content: space-between;
}
.Indexlistbox span{
    font-size: 0.2rem;
    font-weight: 600;
    color:#fe5c4f;
}
.Indexlistbox img{
    display: block;
    padding-top: 0.1rem;
    width: 0.5rem;
    height: 0.5rem;
}
</style>
