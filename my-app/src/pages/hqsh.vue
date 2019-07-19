<template>
    <div>
        <div class="zxf">
            <p>盒区生活</p>
        </div>
        <div class="zxf1">
            <p><img src="../../static/img/h10.png">动态</p>
            <p><img src="../../static/img/h15.png">互动</p>
        </div>
        <div class="zxf2">
            <i></i>
            <i></i>
            <p>我的聊天·<span>CHATTING</span></p>
            <i></i>
            <i></i>
        </div>
        <div class="zxf3">
            <div class="zxf4">
                <img src="../../static/img/h16.png">
                <h3>[38条]兰岛盒小胖</h3>
                <p>兰岛盒小胖邀请td738152340加入群聊</p>
                <span><i>正在进行</i>冬枣测评,快来围观~</span>
            </div>
            <div class="zxf5"> 
                <span>20:37</span>  
            </div>
        </div>
        <div class="zxf6">
            <i></i>
            <i></i>
            <p>热门话题·<span>HOT TOPIC</span></p>
            <i></i>
            <i></i>
        </div>
        <div>
            <Hqsh :arr="newarr"></Hqsh>
        </div>
        <Fuvs></Fuvs>
    </div>
</template>
<script>
import Hqsh from "../components/hqsh2/hqsh"
import Fuvs from "../components/fuvs"

export default {
    components:{
        Hqsh,
        Fuvs
    },
    data(){
        return {
            newarr:[]
        }
    },
    created() {
        this.axios({
            url:"/link/zxf/data",
            method: "get",
        }).then((ok)=>{ 
            // console.log(ok.data.hqsh)      
           this.newarr=ok.data.hqsh
        })
    },
}
</script>
<style scoped>
    .zxf{
        height: 0.8rem;
        width: 100%;    
        background-color: rgb(54, 114, 226);
        position: fixed;
        top: 0;  
        text-align: center;
    }
    .zxf>p{
        font-size: 0.4rem;
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
        color: #f6f6f6;
    }
    .zxf1{
        height: 1.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f6f6f6;
        margin-top: 0.8rem;
    }
    .zxf1 p{
        font-size: 0.3rem;
        width: 3rem;
        height: 0.8rem;
        text-align: center;
        line-height: 0.8rem;
        background-color: #fefefe;
        border-radius: 0.1rem;     
    }
    .zxf1>p>img{
        width: 0.3rem;
        height: 0.3rem;
    }
    .zxf2{
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;
    }
    .zxf2>p{
        font-size: 0.2rem;
        padding: 0 0.2rem;
    }
    .zxf2>p>span{
        color: blue;
    }
    .zxf2>i{
        display: inline-block;
        font-size: 0.2rem;
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        background-color: darkgray;
       
    }
    .zxf3{
        height: 1.5rem;
        float: left;
        width: 90%;
        margin: 0 0.3rem;
    }
    .zxf4{

        float: left;
        width: 70%;
        margin-top: 6%;
        border-radius: 0.2rem;
    }
    .zxf4>img{
        float: left;
        width: 0.8rem;
        height: 0.8rem;
    }
    .zxf4>h3{
        float: left;
        font-size: 0.1rem;
    }
    .zxf4>p{
        
        font-size: 0.1rem;
    }
    .zxf4>i{
        font-size: 0.1rem;
        
    }
    .zxf4>span{
        color: rgb(39, 180, 223);
        float: left;
        font-size: 0.1rem;
    }
    .zxf4>span>i{
        /* width: 0.5rem; */
        background-color: rgb(54, 114, 226);
        color: #f6f6f6;
        border-radius: 3px;
    }
    .zxf5{
        margin-top: 6%;
        width: 1rem;
        float: right;
        text-align: center;
        padding: 0 0.3rem;
    }
    .zxf5 span{
        right: 0;
        float: left;
        font-size: 0.3rem;
        height: 0.8rem;
    }
    .zxf5 img{
        width: 0.4rem;
        height: 0.4rem;
        /* display: inline-block; */
    }
    .zxf6{
        height: 1rem;
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;  
    }
    .zxf6>p{
        font-size: 0.2rem;
        padding: 0 0.2rem;
    } 
    .zxf6>p>span{
        color: blue;
    }
    .zxf6>i{
        display: inline-block;
        font-size: 0.2rem;
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        background-color: darkgray;
       
    }
</style>