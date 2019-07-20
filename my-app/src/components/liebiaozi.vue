<template>
    <div class="bbvs"  style="background:white;height:5rem;padding:10px 10px;margin:10px 5px">
        <ul class="ddvs">

         <li @click="fun(id)"><img :src="img" style="width:3rem;"><p>{{title}}</p><br/><p style="float:left;color:red">￥{{price}}</p></li>
         </ul><img src="../../static/img/h-cart.png" style="width:.6rem;float:right">
    </div>
</template>


<script>
export default {
    props:["title","img","price","id"],
    methods:{
        fun(num){

           this.$router.push("/details/"+num)
            

        }

}
}

</script>


<style scoped>

</style>

