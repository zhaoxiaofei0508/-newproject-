<template>
    <div>
        <div v-for="(v,i) in arr" :key="i">
            <div class="x" @click="fun(v.id)">
                <div class="f">
                <img src="../../../static/img/h17.png">
                <span>{{v.title}}</span>
                </div>
                <div class="f1">
                <img :src="v.imgurl">
                </div>
            </div> 
        </div> 
    </div>
</template>
<script>
export default {
    props:{
        arr:Array
    },
    methods: {
        fun(id){
            this.$router.push("/hequxq/"+id)
        }
    },
    
}
</script>
<style scoped>
   .z{
       height: 3rem;
   }
   .x{
        height: 4.5rem;
    }
    .f{
        height: 1rem;
        display: flex;
       
    }
    .f>img{
        width: 10%;
        height: 70%;
        padding: 0.2rem 0.2rem;
    }
    .f>span{
        line-height: 1rem;
        display: inline-block;
        font-size: 0.25rem;
    }
    .f>img{
        float: left;
    }
    .f1{
        width: 100%;
        height: 3rem;
    }
    .f1 img{
        width: 89%;
        height: 100%;
        padding: 0 0.4rem;
    }
</style>