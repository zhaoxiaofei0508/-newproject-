<template>
    <div>
        <!-- nav -->
            <div class="z3">
                <span @click="fun1()">&lt;</span>
                <p>{{getdas[0].title}}</p>
                <img src="../../static/img/h14.png">
            </div>

        <!-- 详情 -->
    <div>
        <div class="zxf1">
            <img src="../../static/img/h1.png" alt="as">
            <span class="zxf3">{{getdas[0].title}}</span>
        </div>       
        <div class="z1">
            <span v-if="bool" @click="funa()">{{getdas[0].content}}</span>
            <strong v-else @click="funb()">{{getdas[0].content}}</strong>
            <b @click="fun()" v-if="!bool" class="duo">全文</b>
            <img :src="getdas[0].imgurl" alt="">

            <div class="z2" @click="funz(getdas[0].Tuijianid)">
                <img :src="getdas[0].imgurl">
                <span>{{getdas[0].Tuijianxiangqing}}</span>
                <i>{{getdas[0].Tuijianjiaqian}}</i>
            </div>
            <!-- 详情点赞 -->

            <div v-for="(v,i) in getdas[0].Lifearr" :key="i">
            <div class="f1">
                <div id="wf1"><img :src="v.Lifearrimgurl" alt=""></div>
                <div class="wf2">
                    <div class="wf6">爱如指间沙1669</div>
                    <div class="wf7">07/12 21.22 22楼</div>
                </div>
                <div class="wf3">
                        <div>...</div>
                </div>
            </div>
            <div class="wf4">
                <img v-for="(v,i) in v.Lifearrimgarr" :key="i" :src="v.img1" alt="">
            </div>
            <div class="wf5">
                <p>{{v.Lifearrxing1}}</p>
            </div>
            <!-- <div>
                展开
            </div> -->
            <div class="wfe">来自 北京市·盒马先生（良乡大角店）</div>
            <div>
                <div class="wfa"><img src="../../static/img/6.png" alt=""></div>
                <div class="wfb"><img src="../../static/img/6.png" alt=""><span class="wfd">2</span></div>
                <div class="wfc"><img src="../../static/img/6.png" alt=""></div>
            </div>
        </div>
        </div>
    </div>
        
</div>
    
        

</template>
<script>
export default {
    data(){
        return{
            hequ:[],
            ida:"",
            bool:false,
            getdas:""
        }
    },
    methods:{
        fun1(){
            this.$router.go(-1)
        },
        fun(){
            this.bool=true;
        },
        funa(){
            this.bool=false;
        },
        funb(){
            this.bool=true;
        },
        funz(id){
            this.$router.push("/hqsh"+id)
        }
    },

    created(){
        this.axios({
            url:"/link/zxf/data",
            method: "get",
        }).then((ok)=>{
            console.log(ok)
            this.ida=this.$route.params.id; 

           this.hequ=ok.data.hqsh
            this.getdas = this.hequ.filter((v,i)=>{
                if(this.ida==v.id){
                    return v
                }
            })
            
            console.log(this.getdas)
        
           console.log(this.hequ)
           
        })
    },
    // computed: {
    //     getdas(){
    //         var bar = this.hequ.filter((v,i)=>{
    //             if(this.ida==v.id){
    //                 return v
    //             }
    //         })
    //         return bar
    //         console.log(bar)
    //     }
    // },
}
</script>
<style scoped>
    .f1{
        width: 100%;
        overflow: hidden;
    }
    #wf1{
    margin-left:0.1rem;
    margin-right: 0.1rem;
    float: left;
    width: 1rem;
    height:1rem ;
    border-radius: 50%;
    background-color: blue;
    overflow: hidden;
}
#wf1>img{
    width: 100%;
    height: 100%;
    /* border-radius: 50%; */
}
.wf2{
    float: left;
    font-size: 0.4rem;
}
.wf3{
    float: right;
    font-size: 0.5rem; 
    color: #ccc; 
}
.wf4{
    width: 100%;
    height: 4rem;
    text-align: center;
}
.wf4 img{
    width: 30%;
    height: 46%;
    padding: 0 0.1rem;
}
.wf5{
    height: 2rem;
    font-size: 0.3rem;
}
.wf5>p{
    width: 49%;
}
.wf6{
    font-weight: 600;
}
.wf7{
    font-size: 0.25rem;
    color: #ccc;
}
.wfe{
    font-size: 0.3rem;
    color: #ccc;
}
.wfa{
    float: right;

}
.wfb{
     float: right;
     
}
.wfc{
     float: right;
     margin-right: 0.2rem;
}
.wfd{
    font-size: 0.3rem;
     float: right;
     margin-right: 0.2rem;
    
}
 .zxf1{
        height: 1rem;
        line-height: 1rem;
        margin: 0 0.5rem;
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
    }
    .zxf1>img{
        width: 0.5rem;
        height: 0.5rem;
        margin-top: 0.2rem;
    }
    .zxf3{
        font-size: 0.3rem;
        display: inline-block;
        margin: 0 
    } 
    .z1{
        height: 3rem;
    }
    .z1>img{
        width: 100%;
        height: 100%;
    }
    .z1 span{
        font-size: 0.3rem;
        line-height: 0.5rem;
        display: inline-block;
        color: #494949;
        /* height: 5rem; */
    }
    .z1 strong{
        font-weight: 200;
        font-size: 0.3rem;
        color: #494949;
        line-height: 0.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        /* height: 7rem;  */
    }
    .duo{
        font-size: 0.4rem;
        display: inline-block;
        position: absolute;
        top:3.9rem;
        right: 0.1rem;
        color: aqua;
    }
    .z2{
        width: 100%;
        height: 2rem;
        
    }
    .z2>img{
        width: 15%;
        height: 50%;
        border-radius: 50%;
    }
    .z2>span{
        display: inline-block;
        font-size: 0.3rem;
    }
    .z2>i{
        font-size: 0.3rem;
    }
    .z3{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        line-height: 1rem;
        background-color: rgb(44, 110, 197);
        position: fixed;
        top: 0;
        z-index: 9999;
    }
    .z3 span{
        color: aliceblue;
        font-size: 0.5rem;
    }
    .z3 p{
        font-size: 0.3rem;
        color: aliceblue;   
    }
    .z3>img{
        width: 0.5rem;
        height: 0.5rem;
        display: inline-block;
        margin-top: 0.3rem;
    }

</style>