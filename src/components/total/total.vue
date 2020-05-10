<template>
  <div class="total">
    <dm_header></dm_header>
    <!-- 分类页面 -->
    <div class="dm_total">
      <!-- 页面标头 -->
      <div class="dm_total_header">
        <div class="header_lab">
          共
          <span>{{tt_count}}</span>个商品
        </div>
      </div>
      <div class="dm_total_box">
        <div class="total_box_l">
          <!-- 分类菜单 -->
          <div class="dm_total_menu">
            <!-- //城市选择 -->
            <div class="total_menu_firs">
              <div class="left">
                <span class="dm_total_mh">城市：</span>
              </div>
              <div class="right">
                <p>
                  当前选择的城市
                  <span class="dm_total_xs">{{t_address}}</span>
                </p>
                <div class="right_menu">
                  <span :class="{'tt_hover':r_tthover}" @click="tog_address">全部</span>
                  <ul class="right_address" :class="{'b_right_address':r_address}">
                    <li
                      v-for="(tt_city,index) in tt_city"
                      :key="index"
                      @click="value_adress(tt_city.name,index+1)"
                      :class="index+1==first_idx?'tt_hover':''"
                    >{{tt_city.name}}</li>
                  </ul>
                  <!-- 获取城市 -->
                  <!-- 点击传值，将index  和城市名称传给 -->
                  <!-- 点击时改变样式， -->
                  <span @click="switch_address" v-show="r_address">更多…</span>
                  <span @click="switch_address" v-show="!r_address">…收起</span>
                </div>
              </div>
            </div>
            <!-- //分类选择 -->
            <div class="total_menu_firs">
              <div class="left">
                <span class="dm_total_mh">分类：</span>
              </div>
              <div class="right">
                <div class="right_menu">
                  <span :class="{'tt_hover':r_tthover1}" @click="tog_typ">全部</span>
                  <ul class="right_address">
                    <li
                      v-for="(tt_total,index) in tt_total"
                      :key="index"
                      @click="value_typ(tt_total)"
                      :class="tt_total.itemType==second_idx?'tt_hover':''"
                    >{{tt_total.itemType}}</li>
                  </ul>
                  <!-- 获取全部分类 -->
                  <!-- 点击传值，将index  和子类传给this.tt_subclass -->
                  <!-- 点击时改变样式， -->
                </div>
              </div>
            </div>
            <!-- //子类选择 -->
            <div class="total_menu_firs" v-show="t_subclass">
              <!-- 子类长度为0 不显示 -->
              <div class="left">
                <span class="dm_total_mh">子类：</span>
              </div>
              <div class="right">
                <div class="right_menu">
                  <span :class="{'tt_hover':r_tthover2}" @click="tog_sub">全部</span>
                  <ul class="right_address">
                    <li
                      v-for="(tt_subclass,index) in tt_subclass"
                      :key="index"
                      @click="value_sub(tt_subclass,index+1)"
                      :class="index+1==third_idx?'tt_hover':''"
                    >{{tt_subclass.ttName.i_Name}}</li>
                  </ul>
                  <!-- 获取子分类 -->
                  <!-- 点击传值，将index  传给this.tt_subclass -->
                  <!-- 点击时改变样式， -->
                </div>
              </div>
            </div>
            <!-- //时间分类 -->
            <div class="total_menu_firs">
              <div class="left">
                <span class="dm_total_mh">时间：</span>
              </div>
              <div class="right">
                <div class="right_menu">
                  <span :class="{'tt_hover':r_tthover3}" @click="tog_time">全部</span>
                  <ul class="right_address">
                    <li
                      v-for="(tt_time,index) in tt_time"
                      :key="index"
                      @click="value_time(tt_time,index+1)"
                      :class="index+1==fourth_idx?'tt_hover':''"
                    >{{tt_time}}</li>
                    <li style="position: relative;" @click="f_calender">
                      <i class="el-icon-date"></i>按日历
                      <el-calendar class="tt_calender" v-show="r_calender" v-model="value"></el-calendar>
                      <div
                        @click.stop
                        class="calender_stop"
                        v-show="r_calender"
                        @click="f_calender"
                      ></div>
                    </li>
                  </ul>
                  <!-- 获取时间分类 -->
                  <!-- 点击传值，将index  和子类传给this.tt_subclass -->
                  <!-- 点击时改变样式， -->
                </div>
              </div>
            </div>
          </div>
          <!-- //分页码 -->
          <div class="dm_total_cont">
            <el-pagination
              class="tt_pag"
              :page-size="20"
              @current-change="handleCurrentPageChange"
              :pager-count="11"
              layout="prev, pager, next"
              :total="pag_length*20"
            ></el-pagination>
            <!-- //頁碼/size-change ??  --current-change  页码改变触发 -->
            <!-- 主要内容 -->
            <el-tabs type="border-card">
              <el-tab-pane label="相关度排序">
                <div v-for="(hotItems,index) in tt_pag_m " :key="index">
                  <router-link to="/details">
                    <div class="total_cont_lab">
                      <div class="cont_lab_l">
                        <img :src="hotItems.imgUrl" alt />
                        <p>{{hotItems.itemName}}</p>
                      </div>
                      <div class="cont_lab_r">
                        <p class="cont_lab_r_p">{{hotItems.itemName}}</p>
                        <p class="cont_lab_r_p">
                          <i class="el-icon-location"></i>
                          {{hotItems.areaName}}
                        </p>
                        <p class="cont_lab_r_p">
                          <i class="el-icon-date"></i>
                          {{hotItems.startDate}}
                        </p>
                        <span class="cont_lab_r_vip">会员专享价</span>
                        <p class="cont_lab_r_price">
                          <span>{{hotItems.minPrice}}/元</span> 售票中
                        </p>
                      </div>
                    </div>
                  </router-link>
                </div>
              </el-tab-pane>
              <el-tab-pane label="推荐排序">推荐排序</el-tab-pane>
              <el-tab-pane label="最近开场">最近开场</el-tab-pane>
              <el-tab-pane label="最新上架">最新上架</el-tab-pane>
            </el-tabs>
            <el-pagination
              class="tt_pag_f"
              background
              layout="prev, pager, next"
              @current-change="handleCurrentPageChange"
              :page-size="20"
              :total="pag_length*20"
            ></el-pagination>
          </div>
        </div>
        <!-- 右边可能喜欢栏 -->
        <div class="total_box_r">
          <div class="total_box_r_header">您可能还喜欢</div>
          <div class="total_box_r_box">
            <div class="box_r_floor" v-for="(tt_guessLike,index) in tt_guessLike" :key="index">
              <img :src="tt_guessLike.imgUrl" alt />
              <div class="box_r_floor_r">
                <p class="floor_r_p">{{tt_guessLike.itemName}}</p>
                <p class="floor_r_p">{{tt_guessLike.areaName}}</p>
                <p class="floor_r_p">{{tt_guessLike.startDate}}-{{tt_guessLike.endDate}}</p>
                <p class="total_box_r_price">
                  <span>{{tt_guessLike.minPrice}}元</span> 起
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dm_footer></dm_footer>
  </div>
</template>
<script>
import dm_footer from "../footer/footer.vue";
import dm_header from "../header/header";
export default {
  name: "HelloWorld",
  components: {
    dm_footer,
    dm_header
  },
  data() {
    return {
      para_name: this.$route.params.id,
      value: new Date(),
      checkAll: false,
      pag_length: 0, //分页总数
      tt_floor: [], //楼层初始数据
      tt_city: [], //城市初始数据
      tt_time: [], //时间分类初始数据
      tt_total: [], //综合分类初始数据
      tt_selet: [], //分类选择后的数据
      tt_selet1: [], //分类选择后的数据
      tt_selet2: [], //分类选择后的数据
      tt_selet3: [], //分类选择后的数据
      tt_selet_tatol: [], //分类选择后的数据汇总
      tt_guessLike: [], //猜你喜欢初始数据
      tt_subclass: [], //子分类初始数据
      r_address: true, //更多控制属性
      r_tthover: true, //城市属性控制
      r_tthover1: true, //分类属性控制
      r_tthover2: true, //子分类属性控制
      r_tthover3: true, //时间属性控制
      r_calender: false, //日历属性控制
      t_address: "全部", //当前城市
      t_floor1: "全部", //当前选择分类
      t_floor2: "全部", //当前选择子分类
      t_time: "全部", //当前选择时间
      first_idx: 0, //城市index传值
      second_idx: "全部", //分类index传值
      third_idx: 0, //子分类index传值
      fourth_idx: 0, //时间index传值
      tt_count: 0, //总组件数
      tt_pag: [], //已经分页的综合分类初始数据
      tt_pag_nub: 1, //页码
      tt_pag_m: [], //分页初始数据
      tt_pag_tatal: [] //没有分页的综合分类初始数据
    };
  },
  computed: {
    t_subclass(index) {
      //菜單里面全部属性控制器
      if (this.tt_subclass.length == 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    // 分装分页函数开始
    fenye(total, numb) {
      this.tt_selet_tatol = [];
      for (let i = 0; i < this.tt_selet1.length; i++) {
        for (let j = 0; j < this.tt_selet.length; j++) {
          if (this.tt_selet1[i].id == this.tt_selet[j].id) {
            this.tt_selet_tatol.push(this.tt_selet1[i]);
          }
        }
      };
      //tatal为输入的数据  numb为每页个数 输出每页的数组
      let l_number = 0; //计数器1
      let l_number1 = 0; //计数器2
      let l_arr = []; //临时数组1
      let l_arr1 = []; //临时数组1
      for (let i = 0; i < 10; i++) {
        l_arr[i] = []; //给数组每一个值赋值为数组
      }
      this.tt_selet_tatol.forEach(res => {
        // this.tt_count++; //合计总数
        l_number++; //计数器1
        l_arr[l_number1].push(res);
        if (l_number > 5) {
          l_number1++; //计数器2
          l_number = 0; //计数器1  需要归零
        }
      });
      l_arr.forEach(res => {
        if (res.length != 0) {
          l_arr1.push(res);
        }
      });
      this.tt_pag = l_arr1; //给tt——pag重新赋值
      this.tt_pag_m = this.tt_pag[0]; //显示tt_pag0
      this.pag_length = this.tt_pag.length; //重新给页码赋值
    },
    // 分装分页函数结束
    handleCurrentPageChange(res) {
      //点击切换页
      this.tt_pag_m = this.tt_pag[res - 1]; //res初始值为1所以需要-1
    },
    tog_address() {
      //全部点击事件——城市
      this.r_tthover = true; //属性改变
      this.first_idx = 0; //子分类控制
      this.tt_selet = this.tt_pag_tatal; //让ttselet为全部
      this.fenye(5); //再次运行
    },
    tog_typ() {
      //全部点击事件——分类
      this.r_tthover1 = true; //属性改变
      this.second_idx = 0; //子分类控制
      this.tt_selet1 = this.tt_pag_tatal; //让ttselet为全部
      this.tt_subclass = []; //让子分类为空
      this.fenye(5); //再次运行
    },
    tog_sub() {
      this.r_tthover2 = true; //属性改变
      this.third_idx = 0; //子分类控制
    },
    tog_time() {
      this.r_tthover3 = true; //属性改变
      this.fourth_idx = 0; //子分类控制
    },
    f_calender() {
      this.r_calender = !this.r_calender; //日曆代開與關閉
    },
    switch_address() {
      this.r_address = !this.r_address; //城市更过打开器
    },
    value_adress(res, index) {
      //城市点击事件
      this.t_address = res;
      this.first_idx = index;
      this.r_tthover = false;
      this.tt_selet = [];
      this.tt_total.forEach(res => {
        res.hotItems.forEach(pos => {
          if (pos.areaName == this.t_address) {
            this.tt_selet.push(pos); //得到tt_selet
          }
        });
      });
      this.fenye(5);
    },
    value_typ(res) {
      //分类点击事件
      this.second_idx = res.itemType;
      this.tt_subclass = res.children;
      this.r_tthover1 = false;
      this.tt_selet1 = [];
      this.t_floor1 = res.itemType;
      this.tt_total.forEach(res => {
        if (res.itemType == this.t_floor1) {
          res.hotItems.forEach(pos => {
            this.tt_selet1.push(pos); //得到tt_selet
          });
        }
      });
      this.fenye(5);
    },
    tog_typ() {
      //全部点击事件——分类
      this.r_tthover1 = true; //属性改变
      this.second_idx = 0; //子分类控制
      this.tt_selet1 = this.tt_pag_tatal; //让ttselet为全部
      this.tt_subclass = []; //让子分类为空
      this.fenye(5); //再次运行
    },
    value_time(res, index) {
      //时间点击事件
      this.fourth_idx = index;
      this.r_tthover3 = false;
      this.t_time = res;
      // this.tt_pag.forEach(pos => {
      //   pos.forEach(res => {
      //     if (res.name == this.t_address) {
      //       this.tt_selet.push(res);
      //     }
      //   });
      // });这个还有问题
    },
    value_sub(res, index) {
      //子分类点击事件
      this.third_idx = index;
      this.r_tthover2 = false;
      this.t_floor2 = res.aliasName;
      this.tt_total.forEach(res => {
        if (res.itemType == this.t_floor1) {
          // res.hotItems.forEach(pos => {
          //   this.tt_selet1.push(pos);
          // });
        }
      });
      this.fenye(this.tt_selet1, 5);
    }
  },
  mounted() {
    this.$http //城市数据
      .postRequest({
        type: "listQueryCity",
        data: {}
      })
      .then(res => {
        this.tt_city = res.data;
      }); //城市数据结束
    this.$http //可能喜欢数据
      .postRequest({
        type: "listGuessLike",
        data: {
          itemTypeId: "1"
        }
      })
      .then(res => {
        this.tt_guessLike = res.data;
      }); //可能喜欢数据结束

    this.$http.postIndexNav().then(res => {
      //初始信息
      //获取汇总数据 并且将数据进行分页
      this.tt_total = res.data; //所有数据
      this.tt_time = res.time; //获取时间选项
      console.log(this.tt_total);
      this.$nextTick(() => {
        //初始分页
        let l_number = 0; //计数器1
        let l_number1 = 0; //计数器2
        let l_arr = []; //临时数组1
        let l_arr1 = []; //临时数组2  以单个形式存放所有组件
        for (let i = 0; i < 29; i++) {
          l_arr[i] = []; //给数组每一个值赋值为数组
        }
        if (this.para_name != "全部") {
          this.second_idx = this.para_name; //让分类栏变红
          this.r_tthover1 = false; //让分类栏全部不变红
          this.tt_total.forEach(res => {
            //得到所有的组件
            res.hotItems.forEach(pos => {
              l_arr1.push(pos);
            });
            if (res.itemType == this.para_name) {
              res.hotItems.forEach(pos => {
                this.tt_count++; //合计总数
                l_number++; //计数器1
                l_arr[l_number1].push(pos);
                if (l_number > 5) {
                  l_number1++; //计数器2
                  l_number = 0; //计数器1  需要归零
                }
              });
            }
          });
        } else {
          this.tt_total.forEach(res => {
            res.hotItems.forEach(pos => {
              this.tt_count++; //合计总数
              l_number++; //计数器1
              l_arr[l_number1].push(pos);
              l_arr1.push(pos);
              if (l_number > 5) {
                l_number1++; //计数器2
                l_number = 0; //计数器1  需要归零
              }
            });
          });
        }
        this.tt_pag_tatal = l_arr1;
        this.tt_selet = l_arr1;
        this.tt_selet1 = l_arr1;
        l_arr.forEach(res => {
          if (res.length != 0) {
            this.tt_pag.push(res);
          }
        });
        this.tt_pag_m = this.tt_pag[0];
        this.pag_length = this.tt_pag.length;
        //获取初始分页结束
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.router-link_active {
  text-decoration: none;
}
.tt_pag_f {
  widows: 1000px;
  margin: 20px auto;
  text-align: center;
}
.tt_pag {
  position: absolute;
  top: 4px;
  right: 10px;
  z-index: 25;
  background-color: #e4e7ed;
}
.total_box_r_price {
  color: #999;
  padding-top: 25px;
  font-size: 12px;
}
.total_box_r_price span {
  color: #ed0a75;
  font-size: 14px;
  padding-right: 5px;
}
.floor_r_p {
  color: #999;
  font-size: 10px;
}
.floor_r_p:first-child {
  height: 30px;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #333;
}
.box_r_floor img {
  width: 98px;
  height: 132px;
}
.box_r_floor {
  display: flex;
  margin-top: 15px;
  text-overflow: ellipsis;
}
.box_r_floor_r {
  width: 123px;
  padding-left: 10px;
  font-size: 12px;
}
.total_box_r_header {
  height: 37px;
  line-height: 37px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eaeaea;
  font-size: 14px;
  font-family: Microsoft YaHei;
  color: #000;
  padding: 0 15px;
}
.cont_lab_r_price span {
  color: #ff1268;
  font-weight: 700;
  font-size: 16px;
  margin-right: 20px;
  font-style: normal;
}
.cont_lab_r_price {
  color: #999;
  position: absolute;
  bottom: 12px;
  color: #999;
  overflow: hidden;
}
.cont_lab_r_vip {
  border: 1px solid #ff1268;
  color: #ff1268;
  border-radius: 2px;
  padding: 0 6px;
  font-size: 12px;
}
.dm_total_cont {
  margin-top: 20px;
  position: relative;
}
.cont_lab_r i {
  color: #ed0b75;
}
.cont_lab_l p {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff1268;
  font-size: 12px;
  color: #fff;
  padding: 2px 4px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.cont_lab_r_p {
  margin-bottom: 6px;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  color: #999;
}
.cont_lab_r_p:first-child {
  color: #333;
  font-size: 18px;
  text-decoration: none;
}
.cont_lab_r {
  width: 680px;
  line-height: 24px;
  position: relative;
  /* background-color: rgb(24, 21, 19); */
}
.cont_lab_l img {
  width: 100%;
}

.cont_lab_l {
  position: relative;
  display: block;
  width: 153px;
  height: 206px;
  overflow: hidden;
  margin-right: 20px;
  background-color: #846;
}
.total_cont_lab {
  padding: 25px 0 18px;
  border-bottom: 1px dotted #cecece;
  margin: 0 10px;
  display: flex;
  /* background-color: #753; */
}
.el-button-group {
  display: flex;
}
.el-button--mini span {
  margin: 0;
}
.el-button--mini {
  padding: 5px;
  text-align: center;
}
.el-calendar-table .el-calendar-day {
  padding: 2;
  height: 30px;
}
.calender_stop {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  /* background: rgba(7, 17, 27, 0.6); */
}
.tt_calender {
  position: absolute;
  top: 100%;
  position: absolute;
  top: 100%;
  padding: 12px;
  border: 1px solid #e4e7ed;
  z-index: 50;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.tt_hover {
  background-color: #f04293 !important;
}
.right_menu .right_address li:hover {
  text-decoration: underline;
  background-color: #f04293;
}
.right_menu .all:hover {
  text-decoration: underline;
  background-color: #f04293;
}

.right_menu .more {
  color: rgba(86, 59, 117, 0.678);
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  width: 130px;
}
.right_address li {
  list-style: none;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  text-align: left;
  padding: 0 8px;
  margin-right: 12px;
  color: #333;
  white-space: nowrap;
  border-radius: 15px;
  cursor: pointer;
}
.b_right_address {
  height: 50px;
  overflow: hidden;
}
.right .right_menu span {
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  margin-right: 20px;
  color: #333;
  white-space: nowrap;
  cursor: pointer;
}
.dm_total_mh {
  width: 80px;
  line-height: 26px;
  color: #968788;
  text-align: right;
  margin-right: 18px;
  display: inline-block;
}
.right_menu {
  display: flex;
  justify-content: space-between;
}
.dm_total_xs {
  display: inline-block;
  height: 26px;
  padding: 0 8px;
  margin-left: 6px;
  text-align: center;
  line-height: 26px;
  color: #fff;
  background-color: #ed0b75;
}
.total_box_l {
  width: 928px;
  /* background-color: deepskyblue; */
}
.total_box_r {
  width: 258px;
  border: 1px solid #eaeaea;
  margin-left: 10px;
  max-height: 514px;
  /* background-color: rgb(75, 21, 70); */
}
.dm_total_menu {
  padding: 0 24px;
  border: 1px solid #e9e9e9;
  /* background-color: #357; */
}
.total_menu_firs {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px dotted #dfdfdf;
}
.total_menu_firs .left {
  width: 80px;
  line-height: 26px;
  color: #968788;
  text-align: right;
  margin-right: 18px;
}
.dm_total_box {
  width: 1200px;
  margin: 0 auto;
  min-height: 600px;
  color: #333;
  padding: 0 24px;
  border: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
}
.dm_total {
  width: 100%;
  min-height: 600px;
  margin: 0 auto;
  color: #333;
}
.dm_total_header span {
  color: aqua;
}
.header_lab {
  width: 1200px;
  margin: 0 auto;
}
.dm_total_header {
  line-height: 50px;
  color: #666;
  font-size: 14px;
  width: 100%;
  background-image: -webkit-linear-gradient(
    top,
    #a19aa7b9,
    rgba(255, 255, 255, 0)
  );
}
</style>
