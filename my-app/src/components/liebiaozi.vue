<template>
    <div>
        <img :src="img">
         <p>{{title}}</p>
         <p>{{price}}</p>
    </div>
</template>


<script>
export default {
    props:["title","img","price"]
}
</script>


<style scoped>

</style>

