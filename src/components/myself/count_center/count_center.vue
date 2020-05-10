<template>
  <div class="count_center">
    <div class="count_center_title">个人信息</div>
    <div class="count_center_box">
      <ul class="title_message">
        <li>
          <a class="on_message" href="#">基本资料</a>
        </li>
        <li class="right_message">
          资料完整度：
          <span>{{data_store}}</span>
        </li>
      </ul>
      <p class="alert_message">完善更多个人信息，有助于我们为您提供更加个性化的服务，大麦网将尊重并保护您的隐私。</p>
      <ul class="per-edit-msg">
        <li>
          <label class="edit_msg_lb">
            <span class="starrr">*</span>昵称 ：
          </label>
          <input type="text" v-model="nikename" />
        </li>
        <li>
          <label class="edit_msg_lb">真实姓名 ：</label>
          <input type="text" v-model="realname" />
        </li>
        <li>
          <label class="edit_msg_lb">
            <span class="starrr">*</span>性别 ：
          </label>
          <el-radio v-model="sex" label="1">男</el-radio>
          <el-radio v-model="sex" label="2">女</el-radio>
        </li>
        <li class="edit_msg_birth">
          <label class="edit_msg_lb">出生日期 ：</label>
          <div class="block">
            <el-date-picker v-model="birthday" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </li>
        <li>
          <label class="edit_msg_lb">身份证号 ：</label>
          <input type="text" v-model="idcard" />
        </li>
        <li>
          <label class="edit_msg_lb"></label>
          <button @click="dm_save" class="dm_save">保存</button>
        </li>
      </ul>
      <div id="dm_header">
        <div class="item_bock head_p">
          <div class="head_img">
            <img :src="userInfo.avatar" />
          </div>
          <div class="setting_right" @click.stop="uploadHeadImg">
            <button class="caption">更改头像</button>
          </div>
          <input
            type="file"
            v-show="false"
            accept="image/*"
            @change="handleFile"
            class="hiddenInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      nikename: "",
      realname: "",
      idcard:'',
      sex: "1",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      birthday: "",
      userInfo: {
        avatar:
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3934973155,250945400&fm=11&gp=0.jpg"
      }
    };
  },
  computed: {
    data_store() {
      let shu=0;
      if(this.nikename){
        shu++
      };
      if(this.realname){
        shu++
      };
      if(this.idcard){
        shu++
      };if(this.birthday){
        shu++
      }
      if(this.sex){
        shu++
      }
      return shu/5*100+"%"
    }
  },
  methods: {
    // 打开图片上传
    uploadHeadImg: function() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleFile: function(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.userInfo.avatar = res.result;
      };
      reader.readAsDataURL(file);
    },
    dm_save() {
      if (
        !this.nikename ||
        !this.realname ||
        !this.sex ||
        !this.birthday ||
        !this.nikename
      ) {
      }
    }
  },
  mounted() {
     console.log(this.$store.state.user);
      this.nikename= this.$store.state.user.nike_name;
      this.idcard= this.$store.state.user.message.idcard
      this.birthday= this.$store.state.user.message.birthday
      this.realname= this.$store.state.user.message.name
      this.sex= this.$store.state.user.message.sex
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dm_save {
  background-position: -243px -93px;
  width: 94px;
  height: 32px;
  border: none;
  outline: none;
  background-image: url(".\img\b.png");
}
#dm_header {
  position: absolute;
  top: 100px;
  right: 50px;
}
.head_img img {
  width: 100px;
}
.edit_msg_birth {
  display: flex;
}
.edit_msg_lb {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.per-edit-msg li {
  list-style: none;
  margin: 15px;
  font-size: 30px;
}
.alert_message {
  margin-top: 25px;
  background: #fffdee;
  border: 1px solid #edd28b;
  text-align: center;
  padding: 10px 20px;
  color: #999;
  margin-bottom: 15px;
}
.right_message {
  font-size: 8px;
}
.right_message span {
  color: #ed0a75;
  font-size: 28px;
  font-weight: 700;
  line-height: 25px;
}
.title_message {
  border-bottom: 2px solid #ed0a75;
  height: 29px;
  display: flex;
  justify-content: space-between;
}
.title_message li {
  list-style: none;
  color: #333;
  font-size: 14px;
  width: 180px;
  text-align: right;
  line-height: 20px;
}
.on_message:hover {
  color: #fff;
}
.on_message {
  display: block;
  line-height: 29px;
  text-align: center;
  color: #fff;
  background-color: #ed0a75;
  font-size: 12px;
  margin: 0 15px;
  border-radius: 2px;
}
.count_center_title {
  border: 1px solid #efefef;
  height: 38px;
  overflow: hidden;
  padding: 0 15px;
  line-height: 38px;
  color: #999;
  margin-bottom: 15px;
}
.count_center_box {
  width: 790px;
  position: relative;
}
</style>
