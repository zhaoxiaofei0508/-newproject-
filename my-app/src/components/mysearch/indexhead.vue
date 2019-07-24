<template>
    <div class="box">
        <i class="iconfont icon-dizhi" @click="go()"></i>
        <!-- <router-link to="/mysearch"> -->
        <div @click="fun()" class="oinput">
            <input type="text" placeholder="皮皮虾我们走">
            <img src="../../../static/no_orderimg/search.png" alt="" class="oimg">
        </div>
        <!-- </router-link> -->
            <img src="../../../static/img/11.png" alt="" class="oimg2">
            <!-- <img :src="arr" alt="" class="oimg2"> -->
    </div>
</template>
<script>
export default {
    methods: {
        go(){
            this.$router.push("/add_address")
        },
        fun(){
            this.$router.push("/mysearch")
        } 
    },
    data(){
        return {
            // arr:"../../../static/img/11.png"
            arr:[]
        }
    },
    created() {
    // var search= this.$route.params.search
        // this.axios({
        //     url:"http://39.97.247.47:9999/agricultureProduct/findLike",
        //     method:"get",
        //     // params:{"productName":search} 
        //     }).then((ok)=>{
        //         // console.log(ok.data);
        //         this.arr=ok.data
                
        // })


        
        // this.axios({
        //     url:"/link/cpydata",
        //     method:"get"
        // }).then((ok)=>{
        //     // console.log(ok.data.my_like);
        //     this.arr=ok.data.my_like;
        // })
    },
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
    justify-content: space-around;
}
.oinput{
    display: flex;
    align-items: center;
}
input{
    display: block;
    width: 85%;
    height: .5rem;
    border-radius: 20px;
    border:none;
    outline: none;
    padding-left:.8rem;
}
.oimg{
    position: absolute;
    left: 26%;
    top: 29%;
    width: .5rem;
}
.oimg2{
    width: .7rem;
    border-radius:50%;
}
i{
    font-size: .5rem;
    color:beige;
    margin-right: 10px;
}

</style>
