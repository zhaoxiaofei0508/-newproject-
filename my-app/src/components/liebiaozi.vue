<template>
    <div class="bbvs">
        <ul class="ddvs">

         <li @click="fun(id)"><img :src="img"><p>{{title}}</p><p>￥{{price}}</p></li>
         </ul>
    </div>
</template>


<script>
export default {
    props:["title","img","price","id"],
    methods:{
        fun(num){

           this.$router.push("/xqy/"+num)
            

        }

}
}

</script>


<style scoped>


</style>

