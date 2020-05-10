<template>
  <div class="content _menu">
    <ul class="content_list">
      <li v-for="(content_list,index) in content_list " :key="index">
        <!-- <router-link class="menu_clk" :to="{path:'/total',query:{id:content_list.itemType}}"> -->
        <router-link
          class="menu_clk"
          :to="'/total/'+content_list.itemType"
          :key="content_list.itemType"
        >
          <span class="content_lab" :style="content_lab_img(index)"></span>
          <p>{{content_list.itemType}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      content_list: []
    };
  },
  methods: {
    content_lab_img(index) {
      return "background-position: 0 " + index * 60 + "px;";
    }
  },
  mounted() {
    this.$http.postIndexNav().then(res => {
      this.content_list = res.data;
      // console.log(this.content_list);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content_lab {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  background-image: url("./img/menu.png");
  background-size: cover;
}
.content_list li {
  list-style: none;
  width: 120px;
  text-align: center;
  float: left;
}
.content_list {
  margin-top: 15px !important;
  padding: 22px 0 25px 0;
  border: 1px solid #ebebeb;
  zoom: 1;
  width: 1200px;
  margin: 5px auto;
  overflow: hidden;
  /* display: flex;
  justify-content: space-between; */
}
</style>
