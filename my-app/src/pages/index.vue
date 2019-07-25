<template>
    <div>  
<div class="h-top-top"><Indexhead></Indexhead></div>
          

          <div>
  <!--------------------------------------------------------- 轮播图 --------------------------->
  <div>
        <Container :ContainerArr="Containerarr"></Container>
  </div>
  <!--------------------------------------------------------- vip区 ---------------------------->
  <div class="Vip"  @click="Vip(Viparr[0].Type)">
      <img style="width:100%;display:block;" :src="Viparr[0].VipImg">
  </div>
  <div class="Section">
  <!------------------------------------------------------- 食品分类 ---------------------------->
      <div class="classify">
        <div v-for="(v,i) in Classifyarr" :key="i" @click="classify(v.id)">
          <IndexType :ClassifyImg=v.Classifyimg :ClassifyTitle=v.Classifytitle></IndexType>
        </div>
      </div>
  <!-------------------------------------------------------- 新人专区 ---------------------------->
      <div class="newpeople" @click="Numans(Numansarr[0].Type)">
        <img style="width:100%;display:block;" :src="Numansarr[0].NumansImg" >
      </div>

  </div>
  <!------------------------------------------------------ 超合算平价100外卖 ---------------------->
  <div class="Sup">
    <div   v-for="(v,i) in Suparr" :key="i" >
      <IndexSup :SupContent="v.Supcontent" :SupTitle="v.Suptitle" :SupImg="v.Supimg" :Type="v.type" ></IndexSup>
    </div>
  </div>
  <!------------------------------------------------------------ 二级路由 ------------------------->
  <div class="Twocontainer">
      <IndexTwoList :ContainerArr="Containerarr1" :docuTop="DocuTop"></IndexTwoList>
  </div>
  </div>
  <!----------------------------------------------------------- 底部导航 -------------------------->
    <Fuvs :colorindex=Colorindex :colorfenlei=Colorqita :colorhq=Colorqita :colorshopcar=Colorqita :colormy=Colorqita></Fuvs>
</div>
</template>
<script>
import Indexhead from "../components/mysearch/indexhead"
import Fuvs from "../components/fuvs"
import Container from '../components/index/container'
import IndexType from '../components/index/indextype'
import IndexSup from '../components/index/indexsup'
import IndexTwoList from '../components/index/indextwolist'
export default {
   components:{
      Container,
      IndexType,
      IndexSup,
      IndexTwoList,
      Fuvs,
      Indexhead
  },
  // created() {

  //           // 分类区数据
  //          this.axios({
  //             url:"http://39.97.247.47:8088/user/sendVerifyCode",//get发送数据方式
  //               method:"get",

  //           }).then((ok)=>{
  //               this.Classifyarr = ok.data
  //           })
  // },
  data () {
    return {
      Colorindex:"color:#09bffe;box-shadow:0px 2px 6px #666;",
      Colorqita:"color:black",
      DocuTop:0,
        // 轮播图虚拟数据
        Containerarr:[
            {Containerimg:"../../static/indeximg/container.png",id:"11",Type:"龙虾"},
            {Containerimg:"../../static/indeximg/container.png",id:"12",Type:"龙虾"},
            {Containerimg:"../../static/indeximg/container.png",id:"13",Type:"龙虾"},
            {Containerimg:"../../static/indeximg/container.png",id:"14",Type:"龙虾"}
            ],
        // vip虚拟
        Viparr:[
            {VipImg:"../../static/indeximg/vip.png", Type:"会员"}
        ],
        // 新人专享
        Numansarr:[
          {NumansImg:"../../static/indeximg/newpeople.png",Type:"新人"}
        ],
        // 分类区虚拟数据
        Classifyarr:[
          {Classifyimg:"../../static/indeximg/type1.png",id:1,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type2.png",id:2,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type3.png",id:3,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type4.png",id:4,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type5.png",id:5,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type6.png",id:6,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type7.png",id:7,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type8.png",id:8,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type9.png",id:8,Classifytitle:"新鲜水果",type:"水果"},
          {Classifyimg:"../../static/indeximg/type10.png",id:8,Classifytitle:"新鲜水果",type:"水果"},
        
         ],
        // 超合算平价100外卖
        Suparr:[
          {Suptitle:"超合算",Supcontent:"【秒杀】玫瑰香葡萄16.9元",Supimg:"../../static/indeximg/sup1.png",type:"特价"},
          {Suptitle:"超合算",Supcontent:"【秒杀】玫瑰香葡萄16.9元",Supimg:"../../static/indeximg/sup1.png",type:"特价"},
          {Suptitle:"100分",Supcontent:"果味汽水买一赠一",Supimg:"../../static/indeximg/sup2.png",type:"特价"},
          {Suptitle:"100分",Supcontent:"果味汽水买一赠一",Supimg:"../../static/indeximg/sup2.png",type:"特价"},
        ],
        // 二级路由
        Containerarr1:[
            {Containerarr:[
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0002"
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0003",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0001",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0004",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0005",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0006",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0022",
              }],
              id:"001",
              Type:"全部"
              },
            {Containerarr:[
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0007"
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0008"
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0009",

              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0010",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0011",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0012",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0013",
              }],
              id:"002",
              Type:"早餐"
              },
            {Containerarr:[
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0014",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0015",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0016",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0017",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0018",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0019",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0020",
              }],
              id:"003",
              Type:"菜谱"
              },
            {Containerarr:[
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0021",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0026",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0023",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0024",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0025",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0027",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0028",
              }],
              id:"004",
              Type:"休闲"},
            {Containerarr:[
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0029",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0030",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0031",
              },
              {
                imgurl:"../../static/indeximg/list1.png",
                title:"百香果6个装",
                p:"仿佛可以闻到百种果子香",
                span:"￥88.8",
                id:"0032",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0033",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0034",
              },
              {
                imgurl:"../../static/indeximg/list2.png",
                title:"盒马 厄瓜多尔白虾30",
                p:"来自白虾的故乡，南美洲",
                span:"￥39.9",
                id:"0035",
              }],
              id:"005",
              Type:"人气"}
            ],
        }
  },
  mounted() {
    window.addEventListener('scroll',this.DocuTopp);
  },
  destroyed () {
  window.removeEventListener('scroll', this.DocuTopp)
  },
  methods: {
    DocuTopp(){
      this.DocuTop=document.querySelector('.Twocontainer').offsetTop;
    }
  },
}
</script>
<style scoped>
.Section{
  padding: 0 0.12rem;
  background-color: #f5f5f5;
  overflow: hidden;
}
/* -----------------分类 ------------------*/
.classify{
  padding-top: 0.3rem;
  background-color: white;
  overflow: hidden;
  border-radius: 0.2rem;
}
/* -----------------新人专享----------------- */
.newpeople{
  width: 100%;
  padding-top: 0.2rem;
  height: 3.55rem;
}
/* -----------------超合算平价100外卖----------------- */
.Sup{ 
  padding: 0 0.12rem;
  border-radius: 0.2rem;
  background-color: #f7fbfe;
  overflow:hidden;
}
.Twocontainer{
  padding-top: 1.2rem;
  position: relative;
  overflow: hidden;
}
.h-top-top{
  position: fixed;
  top: 0;
 z-index: 999;
}
</style>