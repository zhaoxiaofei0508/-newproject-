<template>
    <div>
        <div class="ohead">
            <span @click="fun()">&lt;</span>
            <h3>个人信息</h3>
        </div>
        <div class="box">
            <div class="head" @click="actionSheet">
                <p class="left">头像</p>
                <p class="right">
                    <img :src="userInfo.avatar" class="img1"/>
                    <!-- <img :src="newdata.img" alt="" class="img1 hiddenInput" @change="handleFile"> -->
                    <img src="../../../static/img/right.png" alt="" class="img2">
                </p>
            </div>
            <div class="head">
                
                <!-- 文件上传 -->
                 <!-- <input type="file" @change="getFile($event)" class="hiddenInput" v-show="boolimg"> -->
                <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" v-show="boolimg"/>
            </div>
            <div class="head">
                <p>性别</p>
                <p>{{newdata.set}}</p>
            </div>
        </div>
        <div class="box">
            <div class="head" @click="resetname">
                <p>昵称</p>
                <div class="right">
                    <input type="text" v-model="oal" class="oinput">
                    <!-- <p id="pp">{{newdata.title}}</p> -->
                    <img src="../../../static/img/right.png" alt="" class="img2">
                </div>
                
            </div>
            <div class="head" @click="signat">
                <p>个性签名</p>
                <div class="right">
                    <textarea  cols="30" rows="3" placeholder="去设置" v-model="sig"></textarea>
                    <!-- <input type="text" placeholder="去设置" v-model="sig"> -->
                    <img src="../../../static/img/right.png" alt="" class="img2">
                </div>
            </div>
        </div>
        <div class="box">
            <p>温馨提示:</p>
            <i>头像和昵称的修改后会在关联的账户生效哦！!</i>
        </div>
        <mt-actionsheet :actions= "data" v-model="sheetVisible"> </mt-actionsheet>
    </div>
</template>
<script>
export default {
    // props:{
    //     // ['newdata'],
    //     // sig:""
    // },
    props:[
        // 接受父组件传过来的数据
        'newdata'
    ],
    data () {
    return {
        boolimg:false,
        sig:"",
        oal:"",
        // 初始图片
        userInfo: {
        avatar: '../../../static/no_orderimg/14.jpg'
        },
      // action sheet 选项内容
      data: [
//         {
//             name: '拍照',
//             method : this.getCamera	// 调用methods中的函数
//         },
        {
            name: '从相册中选择', 
            method : this.getLibrary	// 调用methods中的函数
        }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
    }
  },
    methods: {
        fun(){
            this.$router.go(-1)
        },
        resetname(){
            // 跳转修改昵称
            this.$router.push("/alterusername")
        },
        signat(){
             // 跳转个性签名
             this.$router.push("/signature")
        },
        actionSheet: function(){
        	// 打开action sheet
          this.sheetVisible = true;
        },
    //     getCamera: function(){
    //       console.log("打开照相机")
    //     },
        getLibrary: function(){
            console.log("打开相册");
            this.boolimg=true;
            this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
        handleFile: function (e) {
            var filename_1 = localStorage.getItem("filename_1");//存在localStorage中的文件名
            var fileresult_1 = localStorage.getItem("fileresult_1");//存在localStorage中的文件内容（string）
//         //若localStorage已有该项
//     if(filename_1 && fileresult_1){
//         //storageFile：通过localStorage中的文件内容和文件名构建的File对象
//         var storageFile = new File([fileresult_1], {"type":"text/plain"});//File继承自Blob，可以用Blob的构造函数
//         Object.defineProperty(storageFile,'name',{value:filename_1});
// //        console.log(storageFile);
//     }
        
            let $target = e.target || e.srcElement
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement
                this.userInfo.avatar = res.result
            }

            //确定，将文件保存到本地存储中，替换现有的
            try {
                    localStorage.setItem("filename_1", file.name);
                    localStorage.setItem("fileresult_1", result);
                }
            catch (e) {
                // console.log("Storage failed: " + e);
            }
            
            reader.readAsDataURL(file)
        },
    
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f4f4f4')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    mounted() {
        // 个性签名
        this.sig=localStorage.getItem("signature")
        // 昵称
        this.oal=localStorage.getItem("alterusername")
        // console.log(this.userInfo.avatar)
    },
}
</script>
<style scoped>
.ohead{
    width: 100%;
    height: .81rem;
    border-bottom: 1px solid #dedede;
    background-color: white;
}
span{
    float: left;
    font-size: .5rem;
    color: #3b9ada;
    margin-left: 10px;
}
h3{
    float: left;
    font-size: .34rem;
    color: #050505;
    line-height: .81rem;
    margin-left: 2.7rem;
}
.img1{
    width: 1rem;
}
.img2{
    width: .3rem;
    margin-left: 5px;
}
.box{
    width: 90%;
    background: white;
    margin: 10px auto;
    border-radius: 10px;
    padding: 10px;
}
.head{
    display: flex;
    justify-content:space-between;
    margin: 12px 0;
}
p{
    font-size: .32rem;
}
.right{
    display: flex;
    align-items: center;
}
i{
    font-style: normal;
    font-size: .3rem;
    color:#cdcdcd;
}
input{
    border:0;
    outline: none;
    text-align: right;
    color: darkgrey;
}
textarea{
    border:0;
    outline: none;
    resize: none;
    text-align: right;
    color: darkgrey;
}
</style>
