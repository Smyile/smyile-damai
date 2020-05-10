<template>
  <div class="login_post">
    <div class="dm_post_header">
      <lgi_header></lgi_header>
    </div>
    <div class="dm_post_box">
      <ul class="dm_post_content">
        <li>
          <label class="post_li_l">
            <span class="starrr">*</span> 手机号 :
          </label>
          <div class="post_li_r" :class="{'post_fir_cha':psd_ck_css}">
            <el-select v-model="value" filterable placeholder="中国大陆 +86">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <input class="post_fir_inp" type="text" v-model="post_user" @blur="post_user_fcheck" />
          </div>
        </li>
        <div class="post_alert">
          <el-alert :title="mis_message" type="error" v-show="user_ck_result" show-icon></el-alert>
        </div>
        <li>
          <label class="post_li_l">
            <span class="starrr">*</span> 输入密码 :
          </label>
          <div class="post_li_r" :class="{'post_fir_cha':psd_ck_css1}">
            <input class="post_sct_inp" @blur="post_psd_fcheck" type="password" v-model="post_psd" />
          </div>
        </li>
        <div class="post_alert">
          <el-alert :title="mis_message1" type="error" v-show="psd_ck_result" show-icon></el-alert>
        </div>
        <li>
          <label class="post_li_l">
            <span class="starrr">*</span> 确认密码 :
          </label>
          <div class="post_li_r" :class="{'post_fir_cha':psd_ck_css2}">
            <input
              class="post_sct_inp"
              @blur="post_check_fcheck"
              type="password"
              v-model="post_check"
            />
          </div>
        </li>
        <div class="post_alert">
          <el-alert :title="mis_message2" type="error" v-show="che_ck_result" show-icon></el-alert>
        </div>
        <li>
          <label class="post_li_l">
            <span class="starrr">*</span> 滑动验证码 :
          </label>
          <div class="post_li_r">
            <el-tooltip content="Right center" placement="right">
              <input class="post_sct_inp" type="password" v-model="post_check_num" />
            </el-tooltip>
          </div>
        </li>
        <li>
          <label class="post_li_l"></label>
          <div class="post_li_r">
            <el-checkbox class="post_checkbox" v-model="check_result">
              我已阅读接受
              <a href="#">《大麦网会员服务协议》</a>
              <a href="#">
                《隐
                <br />私权专
                项条款》
              </a>
              <a href="#">《大麦网订票服务条款》</a>并
              <br />同意自动注册
              成为会员.
            </el-checkbox>
          </div>
        </li>
        <li>
          <label class="post_li_l"></label>
          <div class="post_li_r">
            <el-tooltip content="Top center" placement="top">
              <el-button @click="post_register">同意并注册</el-button>
            </el-tooltip>
          </div>
        </li>
      </ul>
    </div>

    <dm_footer>sdfs</dm_footer>
  </div>
</template>
<script>
import lgi_header from "../lgi_header/lgi_header";
import dm_footer from "../../footer/footer";
export default {
  name: "HelloWorld",
  components: {
    lgi_header,
    dm_footer
  },
  data() {
    return {
      post_user: "",
      post_check: "",
      post_psd: "",
      post_check_num: "",
      user_ck_result: false,
      psd_ck_result: false,
      che_ck_result: false,
      check_result: true,
      psd_ck_css: false,
      psd_ck_css1: false,
      psd_ck_css2: false,
      mis_message: "",
      mis_message1: "",
      mis_message2: "",
      options: [
        {
          value: "1",
          label: "中国大陆 +86"
        },
        {
          value: "2",
          label: "中国香港 +852"
        },
        {
          value: "3",
          label: "中国台湾 +886"
        },
        {
          value: "4",
          label: "中国澳门 +853"
        }
      ],
      value: ""
    };
  },
  methods: {
    succ_alert(res) {
      this.$notify({
        title: "正确",
        message: res,
        type: "success"
      });
    },
    fail_alert(res) {
      this.$notify.error({
        title: "错误",
        message: res
      });
    },
    // 校验手机号码输入是否符合要求
    post_user_fcheck() {
      if (!/^1[3|4|5|6|7|9|8][0-9]\d{4,8}$/.test(this.post_user)) {
        this.mis_message = "手机号格式不正确";
        this.fail_alert("手机号格式不正确");
        this.user_ck_result = true;
        this.psd_ck_css = false;
      } else {
        this.mis_message = "";
        this.succ_alert("格式正确");
        this.user_ck_result = false;
        this.psd_ck_css = true;
      }
    },
    // 校验密码输入是否符合要求
    post_psd_fcheck() {
      var ppassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,20}$/;
      if (!ppassword.test(this.post_psd)) {
        this.mis_message1 = "密码格式不正确";
        this.fail_alert("密码格式不正确");
        this.psd_ck_result = true;
        this.psd_ck_css1 = false;
      } else {
        this.mis_message1 = "";
        this.succ_alert("格式正确");
        this.psd_ck_result = false;
        this.psd_ck_css1 = true;
      }
    },
    // 确认密码
    post_check_fcheck() {
      if (this.post_psd != this.post_check || !this.post_check) {
        this.mis_message2 = "密码不一致或为空";
        this.fail_alert("密码不一致或为空");
        this.che_ck_result = true;
        this.psd_ck_css2 = false;
      } else {
        this.mis_message2 = "";
        this.succ_alert("密码确认正确");
        this.che_ck_result = false;
        this.psd_ck_css2 = true;
      }
    },
    //注册提交: 
    post_register() {
      if (this.user_ck_result || this.psd_ck_result || this.che_ck_result) {
        this.fail_alert("请正确填写信息！");
        return;
      } else if (!this.post_user || !this.post_check) {
        this.fail_alert("信息不能为空！");
        return;

      }else if (!this.check_result) {
        this.fail_alert("请同意注册协议");
        return;
      } else {
        this.succ_alert("注册成功");
        this.$router.replace('/login');
      }
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.post_fir_cha {
  border: 1px solid rgb(19, 202, 65) !important;
}
.post_alert .el-alert .el-icon-close {
  top: 4px;
}
.post_alert .el-alert {
  margin-left: 66px;
  padding: 0;
}

.post_alert {
  width: 300px;
  margin: 15px auto;
}
.post_li_r button {
  width: 42%;
  max-width: 42%;
  display: inline-block;
  border: none;
  box-shadow: 2px 2px 2px #444;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(90deg, #ff4aae, #ff1268);
  text-transform: none;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all 0.3s ease-out;
  cursor: pointer;
}
.post_checkbox .el-checkbox__inner {
  margin-bottom: 73px;
}
.post_checkbox {
  font-size: 14px;
  width: 50%;
}
.post_sct_inp {
  flex: 1;
}
.post_fir_inp {
  width: 50%;
  border-radius: 2px;
}
.post_li_r .input__inner {
  width: 50%;
  /* border: 1px solid #ccc; */
  outline: none;
  height: 40px;
  line-height: 40px;
  border-right: 1px solid #ccc;
  cursor: pointer;
  border-bottom: 0;
}
.dm_post_content li {
  display: flex;
  justify-content: center;
  width: 600px;
  margin: 15px auto;
}
.post_li_r {
  width: 50%;
  display: flex;
}
.post_li_l {
  width: 20%;
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  text-align: right;
}
.post_fir_inp {
  cursor: pointer;
  min-width: 150px;
  border: none;
  outline: none;
}
.login_post {
  background: #f8f8f8;
}
.dm_post_header {
  width: 100%;
  background-color: #fff;
}
.dm_post_box {
  padding-top: 40px;
  width: 1200px;
  height: 500px;
  margin: 40px auto;
}
</style>
