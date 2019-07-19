<template>
    <div>
        <div class="box">
            <router-link to="/index"><span>&lt;</span></router-link>
            <input type="text" placeholder="小龙虾" v-model="id_input" id="myInput" >
            <img src="../../../../static/no_orderimg/search.png" alt="">
            <p v-show="bool" @click="fun()">X</p>
            <button @click="btn()">搜索</button>
        </div>
        <div class="history" v-show="ohistory">
            <div class="del">
                <h3>搜索历史</h3>
                <i class="el-icon-delete icon" @click="del()"></i>
            </div>
            <strong id="demo"></strong>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bool:true,
            id_input:"",
            ohistory:false
        }
    },
    methods: {
        fun(){
            this.bool=false,
            this.id_input=""
        },
        btn(){
            if(this.id_input==""){
                this.ohistory=false
            }else{
                this.ohistory=true
                let o = document.getElementById("myInput").value
                document.getElementById("demo").innerHTML =o; 
            }
        },
        del(){
            this.ohistory=false
        }
    },
}
</script>
<style scoped>
.box{
    background-color: #f5f5f5;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}
span{
    font-size: .6rem;
    color: #3b9ada;
    display: block;
    text-align:center;
}
input{
    width: 64%;
    height: .62rem;
    outline: none;
    border:transparent;
    border-radius:.4rem;
    /* background:url("../../../../static/no_orderimg/search.png" ) no-repeat; */
    padding-left:.8rem;
}
img{
    position: absolute;
    left: 15%;
    top: 29%;
    width: .5rem;
}
p{
   width: .4rem;
   height: .4rem;
   border-radius: 50%;
   background-color: gray;
   color: white;
   font-size: .3rem;
   text-align: center;
   position: absolute;
   left: 75%;
   /* display: none; */
}
button{
    width: .8rem;
    height: .62rem;
    outline: none;
    border:none;
    border-radius:.4rem;
    background-color: #3b9ada;
    color: white;
}
.history{
    margin: 10px;
}
.del{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
h3{
    font-size: .4rem;
    margin-top: .28rem;
}
strong{
    width: 1.5rem;
    height: .7rem;
    font-size: .28rem;
    background-color: #f5f5f5;
    text-align: center;
    line-height: .6rem;
    border-radius: 20px;
    font-weight: 100;
    display: block;
}
.icon{
    font-size: .5rem;
}
</style>
