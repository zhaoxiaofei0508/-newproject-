<template>
    <!-- <router-link :to="Tolink"> -->
        <p @click="fun()">{{kind}}</p>
    <!-- </router-link> -->
</template>
<script>
export default {
    props:{
        kind:String,
        // Tolink:String
    },
    methods: {
        fun(){
            this.$router.push("/searchdel/"+this.kind)
            // console.log(22)
        }
    },
}
</script>
<style scoped>
.box{
    /* margin: 10px; */
    /* display: flex; */
    width: 100%;
}
a{
    width: 25%;
    float: left;
    margin-bottom: 10px; 
}
p{
    width: 1.5rem;
    height: .7rem;
    font-size: .28rem;
    background-color: #f5f5f5;
    text-align: center;
    line-height: .7rem;
    border-radius: 20px;
    color: black;
    float: left;
    margin:3px 3px;

}
</style>
