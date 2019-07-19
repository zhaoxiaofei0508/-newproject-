<template>
    <div>
        <div class="swiper-container">
	<div class="swiper-wrapper">
		<div v-for='(v,i) in shopInfo.images' :key="i" class="swiper-slide">
			<img class="img" :src="v">
		</div>
	</div>
	<!-- 如果需要分页器 -->
	<div class="swiper-pagination"></div>
</div>

    </div>
</template>
<script>
import Swiper from 'swiper' 
import 'swiper/dist/css/swiper.css'
export default {
        props:['data'], //接受父组件传过来的数据
        mounted:function(){
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    data(){
        return {
            shopInfo:this.data
        }
    },
}
</script>

<style scoped>
 .img{
     width:100%;
     height: 6rem;
 }   
</style>