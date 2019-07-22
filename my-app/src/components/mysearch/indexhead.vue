<template>
    <div class="box">
        <router-link to="/mysearch">
            <input type="text" placeholder="皮皮虾我们走" id="myInput">
            <img src="../../../static/no_orderimg/search.png" alt="">
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    background:#74C0FF;
    height:.9rem;
    position:fixed;
    top:0px;
    width:100%;
    display: flex;
    line-height: .9rem;
    align-items: center;
    justify-content: center;
}
input{
    width: 60%;
    height: .5rem;
    border-radius: 20px;
    border:none;
    outline: none;
    padding-left:.8rem;
}
a{
    /* display: inline-block; */
    display: flex;
    width: 100%;
    justify-content: center;
}
img{
    position: absolute;
    left: 16%;
    top: 29%;
    width: .5rem;
}
</style>
