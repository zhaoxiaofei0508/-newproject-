<template>
    <div>
        <div class="list-top">
        <Toplist ></Toplist>

        </div>
    </div>
</template>
<script>
import Toplist from '../components/list/top'
// import Hlistleft from '../components/list/h_listleft'
// import Hlistright from '../components/list/h_listright'
export default {
    data() {
        return {
            toparr:[]
        }
    },
    created() {
   
    },
    components:{
        Toplist
        // Hlistleft,
        // Hlistright

    },
   
    
}
</script>
<style scoped>
.list-top{
    overflow: hidden;
    /* position: fixed;
    left: 0;
    top: 0; */

}
.list-bottom{
    /* margin-top: 1.3rem; */
}
.fruit-left{
    float: left;
}
.fruit-right{
    float: right;

    height: 3rem;
    width: 5.5rem;
    background: aqua;

}
</style>