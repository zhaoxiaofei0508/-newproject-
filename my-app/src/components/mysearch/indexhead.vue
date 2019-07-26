<template>
    <div class="box">
        <i class="iconfont icon-dizhi" @click="go()"></i>
        <!-- <router-link to="/mysearch"> -->
        <div @click="fun()" class="oinput">
            <input type="text" placeholder="皮皮虾我们走">
            <img src="../../../static/no_orderimg/search.png" alt="" class="oimg">
        </div>
        <!-- </router-link> -->
            <!-- <img src="../../../static/img/11.png" alt="" class="oimg2"> -->
            <p v-show="bool" @click="login()">请登录哦！</p>
            <img :src="arr1" alt="" class="oimg2" v-show="!bool">
    </div>
</template>
<script>
export default {
    methods: {
        go(){
             var a=localStorage.lastname;
                if(a=="0"){
                    this.$router.push("/denglu")
                }else{
                this.$router.push("/myaddress")
            }
        },
        fun(){
            this.$router.push("/mysearch")
        },
        login(){
            this.$router.push("/denglu")
        }
    },
    data(){
        return {
            arr1:"../../../static/no_orderimg/loginsuccessfully.png",
            arr:[],
            bool:true,
            username:"",
        }
    },
    created() {
    // var search= this.$route.params.search
        // this.axios({
        //     url:"http://39.97.247.47:9999/user/findByUserNameByUserPassword",
        //     method:"post",
        //     // params:{"productName":search} 
        //     }).then((ok)=>{
        //         // console.log(ok.data);
        //         // this.arr=ok.data
        //         if(localStorage.lastname==0){
        //             this.bool=true;
        //         }else{
        //             this.bool=false
        //         }
                
        // })
        
        if(localStorage.lastname==0){
            this.bool=true; 
        }else{
            this.bool=false
        }
        
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
    padding-left:.9rem;
}
.oimg{
    position: relative;
    left: -3.6rem;
    width: .4rem;
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
p{
    font-size: .26rem;
    color:darkslategray;
    animation: myfirst 2s infinite;
    /* animation: shadow .7s linear infinite; */
}
/* @keyframes shadow {
    0%, 100% {transform: scaleX(1);}
    50% {transform: scaleX(1.2);}
} */
 @keyframes myfirst {
    0% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(10px, 0px);
    }
    100% {
        transform: translate(0px, 0px);
    }
}

</style>
