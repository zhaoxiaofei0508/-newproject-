
        <template>



              <div class="cc">

      <router-link :to="link"  >
                <img :src="img">
                <p v-html="title"></p>    
      </router-link>              
    

                </div>
    
    
    
            </template> 









<script>

export default {
       props:["img","title","link"]
}
</script>


<style scoped>
.cc{width:20%;
    float:left;text-align:center;
    font-size:.3rem;
  

    }
.cc p{color:gray;}
.cc img{width:.9rem;}

</style>
