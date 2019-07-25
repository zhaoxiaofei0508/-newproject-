<template>
    <div class="box">
        <h3>盒马鲜生西安兰岛店 实时热搜</h3>
        <div class="xia" >
                <Slistitem v-for="(v,i) in newarr" :key="i" :kind="v.kind" ></Slistitem>
        </div>
        <h3>新品•时令</h3>
        <div class="xia" >
            <!-- <router-link to="/searchdel"> -->
                <Slistitem v-for="(v,i) in arrSearch2" :key="i" :kind="v.okind"></Slistitem>
            <!-- </router-link> -->
        </div>
    </div>
</template>
<script>
import Slistitem from './slistitem'
export default {
    components:{
        Slistitem
    },
    data(){
        return{
            arrSearch1:[],
            arrSearch2:[],
            myid:[]
        }
    },
    created() {
        // this.myid=this.$route.params.id
        // console.log(this.$route.params.id);
        this.axios({
            url:"/link/cpydata",
            method:"get"
        }).then((ok)=>{
            // console.log(ok.data.my_search1);
            this.arrSearch1=ok.data.my_search1
            this.arrSearch2=ok.data.my_search2
        })

        //  this.axios({
        //     url:"http://39.97.247.47:9999/agricultureProduct/findLike",
        //     method:"get",
        //     //  params:{productName:} 
        // }).then((ok)=>{
        //     console.log(ok.data);
        //     this.arrSearch1=ok.data
        //     this.arrSearch2=ok.data
        // })

    },
    computed: {
        newarr(){
            return this.arrSearch1.slice(0, 8)
        }
    },  
}
</script>
<style scoped>
.box{
    margin: 10px;
    
}
.xia{
    overflow: hidden;
    height:1.6rem;
    margin-top: 20px;
}
h3{
    font-size: .4rem;
    margin-top: .28rem;
}
</style>
