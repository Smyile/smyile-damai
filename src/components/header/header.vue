<template>
  <div class="dm-header-wrap">
    <div class="dm-header-box">
      <div class="box_left">
        <a class="dm-header_logo">
          <img src=".\img\amlogo.png" alt />
        </a>
        <ul class="dm_header_nav">
          <li>
            <i class="el-icon-location"></i>
            <el-dropdown>
              <span class="el-dropdown-link">
                全国
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link :to="'/total/'+'全部'">分类</router-link>
          </li>
        </ul>
      </div>
      <div class="box_right">
        <div class="dm_header_search">
          <el-input
            class="search_inp"
            placeholder="搜索明星、演出、体育赛事"
            prefix-icon="el-icon-search"
            v-model="search_input"
          >
            <el-button class="search_but" slot="append">
              <router-link :to="'/total/'+search_input">搜索</router-link>
            </el-button>
          </el-input>
        </div>
        <ul class="dm_header_menu">
          <!-- console.log(); -->
          <li>
            <router-link to="/login" v-if="!dm_user">
              <span class="el-dropdown-link">
                <img src="./img/user.png" alt /> 登录
              </span>
            </router-link>
            <el-dropdown v-else>
              <span class="el-dropdown-link">
                <img src="static\img\tt1.jpg" alt class="hhk_img" />
                {{dm_user.nike_name}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/myself/count_center">个人信息</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/myself/user_message">账户设置</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/myself/user_center">订单管理</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span @click="dm_logout">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="./img/download.png" alt />下载
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>个人信息</el-dropdown-item>
                <el-dropdown-item divided>账户设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="./img/English.png" alt />English
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item disabled>个人信息</el-dropdown-item>
                <el-dropdown-item divided>账户设置</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      search_input: ""
    };
  },
  computed: {
    dm_user() {
      return this.$store.state.user;
    }
  },
  methods: {
    dm_logout() {
      this.$store.state.user = "";
    },
    cccc() {
      //如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。
      function fn(resolve) {
        setTimeout(function() {
          resolve(123);
        }, 3000);
      }
      let p0 = new Promise(fn);
      let p1 = Promise.resolve(p0);
      // 返回为true，返回的 Promise 即是 入参的 Promise 对象。
      console.log(p1);
    }
  },
  mounted() {
    this.$http
      .postRequest({
        type: "listGuessLike",
        data: {
          itemTypeId: "1"
        }
      })
      .then(res => {
        // console.log(res);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hhk_img {
  border: 1px solid deepskyblue;
}
.dm_header_menu img {
  width: 26px;
  z-index: 20000;
  display: inline-block;
  margin-right: 4px;
  vertical-align: middle;
}
.dm_header_menu li {
  list-style: none;
  float: left;
  height: 100%;
  line-height: 72px;
  cursor: pointer;
  margin-left: 20px;
  vertical-align: middle;
  color: #111;
  font-size: 16px;
}
.dm_header_search .el-input__prefix {
  width: 53px;
  font-size: 20px;
  display: inline-block;
}
.dm_header_search .el-input--prefix .el-input__inner {
  padding-left: 48px;
}
.dm_header_search {
  width: 401px;
  height: 46px;
  margin-top: 12px;
  margin-right: 20px;
  line-height: 46px;
}
.dm_header_search input {
  width: 217px;
  height: 45px;
  z-index: 10;
  margin: 0;
  font-size: 16px;
  background-color: transparent;
  outline: 0;
  -webkit-appearance: none;
  border: 0;
  padding: 0 10px 0 54px;
  border-top-left-radius: 46px;
  border-bottom-left-radius: 46px;
  border: 1px solid #f8f8f8;
  background-color: #f8f8f8;
  /* border-right-color: #ff1268; */
  box-sizing: content-box;
}
.dm_header_search .el-input-group__append {
  width: 82px;
  height: 100%;
  background: #ff1268;
  line-height: 45px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  border-radius: 0 27px 27px 0;
  z-index: 11;
  letter-spacing: 4px;
  cursor: pointer;
}
.box_right {
  display: flex;
  text-align: right;
}
.box_left {
  display: flex;
}
.dm_header_nav li {
  float: left;
  list-style: none;
  font-size: 14px;
  margin: 0 10px;
}
.dm_header_nav {
  height: 100%;
  box-sizing: border-box;
  padding: 24px 0;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.dm_header_search .el-select .el-input {
  width: 230px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.dm-header-wrap {
  width: 100%;
  /* background-color: #eee; */
}
.dm-header_logo {
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
}
.dm-header_logo img {
  height: 42px;
}
.dm-header-box {
  width: 1200px;
  height: 72px;
  margin: 0 auto;
  /* background-color: #154; */
  display: flex;
  justify-content: space-around;
}
</style>
