<template>
    <div class="box">
        <router-link :to="Tolink" class="aa">
            <div class="left">
                <i :class="calssname"></i>
                <p>{{title}}</p>
            </div>
            <div class="span">&gt;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        calssname:String,
        title:String,
        Tolink:String
    }
}
</script>
<style scoped>
.box{
    border-top:1px solid #e4e4e4;
    padding: 10px;
}
.aa{
    display: flex;
    justify-content: space-between;
}
.left{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    float: left;
}
p{
    font-size: .34rem;
    color: #727272;
}
.span{
    /* margin-left:4rem; */
    float: right;
    font-size: .34rem;
    color: #727272;
}
i{
    font-size: .5rem;
    color: #2ba2f6;
    margin-right: 10px;
}
</style>
