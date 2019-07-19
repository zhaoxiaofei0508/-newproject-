<template>
    <div>
        
    </div>
</template>

<script>
export default {
     func(){
    axios的综合写法
    既可以是get也可以是post
    axios({
        url:"http://localhost:3000/get?uname=xx",//get发送数据方式2
        method:"get"
       // params:{uname:"xixihahahaa"}get发送数据方式1
    }).then((ok)=>{
        console.log(ok)
    })

    // post的写法
    var param=new URLSearchParams();
    param.append("uname","postxixixihaha");
        axios({
        url:"http://localhost:3000/post",
        method:"post",
    // post发送数据的时候使用data属性
    data:param
    }).then((ok)=>{
        console.log(ok)
    })
}
}
</script>