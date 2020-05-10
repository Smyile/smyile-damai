<template>
  <div class="content">
    <content_menu></content_menu>
    <div class="content_recomend">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="今日推荐" name="first">
          <ul class="content_tui">
            <li v-for="(recomend,index) in recomend" :key="index">
              <router-link to="/details">
                <img :src="recomend.imgUrl" alt />
                <p>{{recomend.itemName}}</p>
                <p>
                  ￥{{recomend.minPrice}}元
                  <span>起</span>
                </p>
              </router-link>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="即将开售" name="second">
          <ul class="content_tui">
            <li v-for="(recomend,index) in sell" :key="index">
              <router-link to="/details">
                <img :src="recomend.imgUrl" />
                <p>{{recomend.itemName}}</p>
                <p>
                  ￥{{recomend.minPrice}}元
                  <span>起</span>
                </p>
              </router-link>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="content_cont" v-for="(cont,index) in floor" :key="index">
      <div class="content_cont_header">
        <span class="content_title">{{cont.itemTypeName}}</span>
        <span class="content_all">
          <router-link
          class="menu_clk"
          :to="'/total/'+cont.itemTypeName"
          :key="cont.itemTypeName"
        >查看全部</router-link>
        </span>
      </div>
      <div class="content_cont_cont">
        <div class="cont_l">
          <img :src="cont.imgUrl" />
        </div>
        <div class="cont_r">
          <ul class="content_label">
            <li v-for="(cont_s,hhk) in cont.items" :key="hhk">
              <router-link class="jjk" to="/details">
                <img :src="cont_s.imgUrl" alt />
                <div class="content_label_b">
                  <p>{{cont_s.itemName}}</p>
                  <p>{{cont_s.itemName}}</p>
                  <p style="margin-top: 20px;margin-bottom: 0;color:#FF1268">
                    ￥{{cont_s.minPrice}}元
                    <span>起</span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content_menu from "../content_menu/content_menu";
export default {
  name: "HelloWorld",
  components: {
    content_menu
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      activeName: "second",
      recomend: [],
      sell: [],
      floor: []
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  mounted() {
    this.$http.postIndexRecommend().then(res => {
      this.recomend = res.data;
    });
    this.$http.postIndexSell().then(res => {
      this.sell = res.data;
    });
    this.$http.postFloorData().then(res => {
      this.floor = res.data;
      // console.log(res.data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.jjk {
  color: #000;
}
.content_label li {
  width: 280px;
  height: 160px;
  display: flex;
  margin-right: 16px;
  display: inline-block;
  margin-bottom: 20px;
  color: #000;
  overflow: hidden;
  font-size: 12px;
}
.content_label img {
  width: 105px;
  height: 140px;
}
.content_label span {
  font-size: 10px;
}
.content_label_b {
  width: 138px;
  height: 100%;
  position: relative;
  padding-left: 15px;
  display: inline-block;
  vertical-align: top;
  /* background-color: #159; */
}
.content_label p {
  margin: 0 5px;
  margin-bottom: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.cont_r {
  display: inline-block;
  width: 960px;
  margin-left: 20px;
  height: 320px;
  vertical-align: top;
  overflow: hidden;
  /* 如何两行折起 */
  /* -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; */
  /* background-color: #963; */
}
.cont_l {
  display: inline-block;
  width: 260px;
  height: 320px;
  position: relative;
  overflow: hidden;
  /* background-color: #852; */
}
.cont_l img {
  width: 98%;
}
.content_cont_cont {
  display: flex;
  justify-content: space-around;
}
.content_all {
  vertical-align: middle;
  margin-right: 23px;
  font-size: 14px;
  color: #9b9b9b;
  max-width: 450px;
  height: 100%;
  float: right;
  overflow: hidden;
}
.content_cont_header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 15px;
}
.content_title {
  font-size: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  color: #111;
  width: 500px;
  height: 40px;
  overflow: hidden;
}
.content_cont {
  width: 1160px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
  border: 1px solid #ebebeb;
  margin-top: 15px;
}
.content_recomend {
  margin-top: 15px !important;
  box-sizing: border-box;
  padding: 22px 50px 25px 50px;
  border: 1px solid #ebebeb;
  zoom: 1;
  width: 1200px;
  margin: 0 auto;
}
.content_tui li {
  width: 150px;
  float: left;
  margin: 15px;
  list-style: none;
}
.content_tui img {
  width: 100%;
}
.content_tui p {
  margin: 10px 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.content {
  margin-bottom: 20px;
}
</style>
