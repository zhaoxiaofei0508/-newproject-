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
            <p>我的聊天<span>CHATTING</span></p>
            <i></i>
            <i></i>
        </div>
        <div class="zxf3">
            <div class="zxf4">
                <div class="f4l">
                    <img src="../../static/img/h16.png">
                </div>
                <div class="f4r">
                    <h3>[38条]盒马兰岛盒</h3>
                    <p>兰岛盒小胖邀请td738152340加入群聊</p>
                    <i>正在进行</i><em>冬枣测评,快来围观~</em>
                </div>
               
            </div>
            <div class="zxf5"> 
                <span>{{time}}</span>  
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
        <Fuvs :colorindex=Colorqita :colorfenlei=Colorqita :colorhq=Colorhq :colorshopcar=Colorqita :colormy=Colorqita></Fuvs>
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
            Colorqita:"color:black",
            Colorhq:"color:rgb(116, 192, 255)",
            newarr:[],
            time:0
        }
    },
    created() {
        let that=this
        setInterval(function(){
            let  date=new Date();
            let a= date.getHours(); //获取当前小时数(0-23)
            let b=  date.getMinutes(); //获取当前分钟数(0-59)
            let c=  date.getSeconds();   
            if(a<10){
                a="0"+a
            }
            if(b<10){
                b="0"+b
            }
            if(c<10){
                c="0"+c
            }
            that.time=a+":"+b+":"+c;
        },1000)
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
    .zxf1>p{
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
        /* float: left; */
        display: flex;
        width: 100%;
    }
    .zxf4{
        display: flex;
        width: 70%;
    }
    .f4l{
        width: 20%;
    }
    .f4l>img{
        margin-top: 0.2rem;
    }
    .f4r{
        width: 80%;
        margin-top: 0.2rem;
    }
    .f4r em{
        color: rgb(39, 180, 223);
        font-size: 0.1rem;
        font-style: normal;
    }
    .zxf4 .f4l img{
        width: 0.8rem;
        height: 0.8rem;
    }
    .zxf4 .f4r h3{
        font-size: 0.1rem;
    }
    .zxf4 .f4r p{
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.2rem;
        overflow: hidden;
    }
    .zxf4 {

        font-size: 0.1rem;
    }
    .zxf4 .f4r  i{

        background-color: rgb(54, 114, 226);
        color: #f6f6f6;
        border-radius: 3px;
        font-style: normal;
        font-size: 0.18rem;
        height: 0.2rem;
        line-height: 0.2rem;
    }
    .zxf5{
        width: 30%;
        text-align: center;
        /* padding: 0 0.3rem; */
    }
    .zxf5 span{
        right: 0; 
        font-size: 0.3rem;
        height: 0.8rem;
        /* line-height: 0.8rem; */
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