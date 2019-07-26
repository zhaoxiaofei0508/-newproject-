<template>
  <div style="width:100%;height:100%">
    <div class="map_search">
      <p class="search-box">
        <input type="text" v-model="addressMap" id="search" placeholder="请输入地址" />
        <span id="sure" @click="transData">确定</span>
      </p>
    </div>
    <div id="container"></div>
  </div>
</template>
<script>
import MapLoader from "@/assets/js/AMap.js";

export default {
  data() {
    return {
      map: null,
      center: [108, 34],
      addressMap: "",
      searchInstance: null,
      searchEvent: null
    };
  },
  mounted() {
    this.mapReq();
  },

  methods: {
    transData() {
      this.$router.push({
        path: "/add_address",
        query: {
          address:document.querySelector("#search").value
        }
      });
    },
    makeAMarker() {
      return new AMap.Marker({
        position: new AMap.LngLat(this.center[0], this.center[1]),
        icon: new AMap.Icon({
          image: require("@/assets/dw.png"), //定位点显示的图标
          size: new AMap.Size(60, 60), // 图标大小
          imageSize: new AMap.Size(26, 26)
        }),
        offset: new AMap.Pixel(-30, -60) //图标点的位置
      });
    },
    mapReq() {
      let that = this;

      MapLoader().then(
        AMap => {
          console.log("地图加载成功");
          that.map = new AMap.Map("container", {
            resizeEnable: true,
            // center: mapData.jwNum, //地图标记title
            center: this.center,
            zoom: 16 //地图视图缩放级别
          });

          let marker = that.makeAMarker();
          that.map.add(marker);

          that.map.plugin(
            ["AMap.Autocomplete", "AMap.PlaceSearch"],
            function() {
              var autoOptions = {
                // 城市，默认全国
                // 使用联想输入的input的id
                input: "search"
              };
              var autocomplete = new AMap.Autocomplete(autoOptions);

              var placeSearch = new AMap.PlaceSearch({
                map: that.map
              });
              AMap.event.addListener(autocomplete, "select", function(e) {
                //TODO 针对选中的poi实现自己的功能
                placeSearch.search(e.poi.name);
              });
              AMap.event.addListener(placeSearch, "markerClick", function(e) {
                //TODO 针对选中的poi实现自己的功能

                let address = e.data.cityname + e.data.adname + e.data.address;

                if (e.id === that.choosenId) {
                  that.$router.push({
                    path: "/add_address",
                    query: {
                      address
                    }
                  });
                } else {
                  that.choosenId = e.id;
                }
              });
            }
          );

          that.map.plugin("AMap.Geolocation", function() {
            var geolocation = new AMap.Geolocation({
              // 是否使用高精度定位，默认：true
              enableHighAccuracy: true,
              // 设置定位超时时间，默认：无穷大
              timeout: 10000,
              // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
              buttonOffset: new AMap.Pixel(10, 20),
              //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              zoomToAccuracy: true,
              //  定位按钮的排放位置,  RB表示右下
              buttonPosition: "RB",
              panToLocation: true
            });

            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, "complete", onComplete);
            AMap.event.addListener(geolocation, "error", onError);

            function onComplete(data) {
              // data是具体的定位信息
              let position = [data.position.lng, data.position.lat];
              console.log(data, position);
              that.map.panTo(position);
              that.$set(that, "center", position);
              that.map.remove(marker);
              that.map.add(that.makeAMarker());
              console.log(data);
              this.addressMap = data.formattedAddress;
              document.querySelector("#search").value = this.addressMap;
            }

            function onError(data) {
              // 定位出错
            }
          });
        },
        e => {
          console.log("地图加载失败", e);
        }
      );
    }
  }
};
</script>
<style>
html,
body,
#app {
  height: 100%;
}
#container {
  width: 100%;
  height: 92%;
}
#sure {
  font-size: 0.3rem;
  height: 0.45rem;
  margin-top: 0.17rem;
  display: inline-block;
  border: 1px solid #ccc;
}
#search {
  width: 85%;
  height: 0.6rem;
  margin: 0.1rem 0.2rem;
  border: 0.01rem solid gray;
}
.map_search {
  width: 100%;
  height: 6%;
}
.map_search p {
  display: flex;
  width: 100%;
  height: 0.7rem;
  margin: auto;
}
button {
  display: inline-block;
  width: 1rem;
  height: 0.7rem;
}
</style>