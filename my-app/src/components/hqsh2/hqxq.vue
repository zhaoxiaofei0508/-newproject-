<template>
    <div>
         <div v-for="(v,i) in newgetdas[0].Lifearr" :key="i">
            <div class="f1">
                <div id="wf1"><img :src="v.Lifearrimgurl" alt=""></div>
                <div class="wf2">
                    <div class="f3">{{v.Lifearrname}}</div>
                    <div class="f4">{{v.Lifearryuefen}}</div>
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
            <div class="z1">
                <span v-if="bool" @click="funa()">{{v.Lifearrcontent}}</span>
                <strong v-else @click="funb()">{{v.Lifearrcontent}}</strong>
                <b @click="fun()" v-if="!bool" class="duo">全文</b>
            </div>
            <div class="z6">{{v.Lifearrspan}}</div>
            <div class="z5">
                <div class="z4">
                <span class="iconfont icon-fenxiang"></span>
                <span class="iconfont icon-dianzan"></span>
                <span class="iconfont icon-liuyan"></span>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        newgetdas:Array
    },
    data(){
        return{    
            bool:false,
        }
    },
    methods:{
        fun(){
            this.bool=true;
        },
        funa(){
            this.bool=false;
        },
        funb(){
            this.bool=true;
        },
    }

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
    overflow: hidden;
}
#wf1>img{
    width: 100%;
    height: 100%;
}
.f3{
    font-size: 0.3rem;
}
.f4{
    font-size: 0.1rem;
}
.wf2{
    float: left;
    padding: 0.2rem 0 0 0 ;
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
    height: 1.5rem;
    font-size: 0.3rem;
}
.wf5>p{
    width: 49%;
    padding: 0 0.2rem;
}

.wfe{
    font-size: 0.3rem;
    color: #ccc;
}
.z4{  
        height: 1rem;
        float: right;
        line-height: 1rem;
    }
    .z4>span{
        height: 1rem;
        display: inline-block;
    }
    .z5{
        height: 1rem;
    }
    .z6{
        padding: 0 0.2rem;
        font-size: 0.2rem;
        color: #ccc;
    }
    .z1>img{
        width: 100%;
        height: 100%;
    }
    .z1>span{
        font-size: 0.3rem;
        line-height: 0.5rem;
        display: inline-block;
        color: #494949;
        padding: 0 0.2rem;
        /* height: 5rem; */
    }
    .z1>strong{
        font-weight: 200;
        font-size: 0.3rem;
        color: #494949;
        line-height: 0.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        padding: 0 0.2rem;
    }
    .duo{
        font-size: 0.35rem;
        display: inline-block;
        position: absolute;
        right: 0.1rem;
        color: aqua;
    }
</style>
