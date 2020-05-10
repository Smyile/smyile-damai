<template>
  <div class="page clearfix">
    <div class="container">
      <div class="con-wrapper">
        <el-col :span="3">
          <ul>
            <li class="t">订购方式</li>
            <li>
              <a href="#">在线订购</a>
            </li>
            <li>
              <a href="#">电话订购</a>
            </li>
            <li>
              <a href="#">上门订购</a>
            </li>
            <li>
              <a href="#">大客户团体订购</a>
            </li>
            <li>
              <a href="#">大麦超级票订购</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <li class="t">配送方式</li>
            <li>
              <a href="#">送货上门</a>
            </li>
            <li>
              <a href="#">电子票</a>
            </li>
            <li>
              <a href="#">上门自取</a>
            </li>
            <li>
              <a href="#">大麦自助机换票</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <li class="t">支付方式</li>
            <li>
              <a href="#">在线支付</a>
            </li>
            <li>
              <a href="#">柜台付款</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <li class="t">大麦网微信</li>
            <li>
              <span class="t-code">
                <img :src="imgcode" alt />
              </span>
            </li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <li class="t">大麦网触屏版</li>
            <li>
              <span class="t-code">
                <img :src="imgcode" alt />
              </span>
            </li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <li class="t">账户安全</li>
            <li>
              <a href="#">找回密码</a>
            </li>
            <li>
              <a href="#">账户注册</a>
            </li>
            <li>
              <a href="#">账户绑定</a>
            </li>
            <li>
              <a href="#">SSL安全证书</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <li class="t">配送方式</li>
            <li>
              <a href="#">退换及缺货说明</a>
            </li>
            <li>
              <a href="#">发票帮助</a>
            </li>
            <li>
              <a href="#">订票服务条款</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="3">
          <ul>
            <li class="t">特色服务</li>
            <li>
              <a href="#">演出订阅</a>
            </li>
          </ul>
        </el-col>
      </div>
    </div>
    <!-- links -->
    <div class="t-link tc h4">
      <a href="#">公司介绍</a>|
      <a href="#">品牌识别</a>|
      <a href="#">企业荣誉</a>|
      <a href="#">隐私声明</a>|
      <a href="#">联系及合作</a>|
      <a href="#">招聘信息</a>|
      <a href="#">网站地图</a>|
      <a href="#">友情链接</a>|
      <a href="#">公司大事记</a>
    </div>
    <!-- copyright -->
    <div class="t-copyright tc">
      <!-- 动态绑定一个key 就不会报警告了 -->
      <a href="#" v-for="(item,index) in copyrights" :key="index">
        <img :src="item.imgurl" />
      </a>
    </div>
  </div>
</template>

<script>
import er_code from "./img/p_code.jpg";
// 版权图片
import piao from "./img/piao.png";
import dzyy from "./img/dzyy.png";
import siteseal from "./img/siteseal_gd_3.gif";
import pci from "./img/pci.png";
import xin from "./img/xin.png";
import chengxin from "./img/chengxin.png";

export default {
  data() {
    return {
      imgcode: er_code,
      copyrights: [
        { imgurl: piao },
        { imgurl: dzyy },
        { imgurl: siteseal },
        { imgurl: pci },
        { imgurl: xin },
        { imgurl: chengxin }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
*{
  font-size: 13px;
  text-decoration: none;
}
.page {
  width: 100%;
  height: 400px;
  background-color: #e6e6e6;
}
.t {
  line-height: 40px;
  color: #333;
  font-size: 16px;
}

li {
  line-height: 25px;
  color: #666;
  list-style: none;
}

.t-code {
  display: block;
  width: 90px;
  height: 89px;
}
.con-wrapper {
  padding-top: 45px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ff3c1b;
  overflow: hidden;
}

a {
  color: #666;
  margin: 0 10px;
}
.t-link {
  text-align: center;
  color: #666;
  line-height: 52px;
  margin-bottom: 15px;
  
}
/* // 版权信息 */
.t-copyright{
  text-align: center;
}
.t-copyright img {
  margin-right: 20px;
}
</style>
