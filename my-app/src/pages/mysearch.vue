<template>
<!-- 搜索框路由 -->
    <div class="box">
        <Sheader></Sheader>
        
        <div class="search">
            <Slist></Slist>
        </div>
    </div>
</template>
<script>
import Sheader from '../components/mysearch/searchhead/sheader'
import Slist from '../components/mysearch/slist'
export default {
    components:{
        Sheader,
        Slist
    }
}
</script> 
<style scoped>

</style>
