<template>
    <div>
          <Top></Top>
         <Fuvs></Fuvs>
         首页
    </div>
</template>
<script>
import Top from "../components/topbar"
import Fuvs from "../components/fuvs"
export default {
       components:{Fuvs,Top},
}
</script>
<style scoped>
/* p{
    width: 7.5rem;
    height: 0.5rem;
    background: red;
    font-size: 12px;
} */
</style>