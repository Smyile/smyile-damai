<template>
  <div class="index">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import dm_footer from "../footer/footer.vue";
import dm_header from "../header/header";
export default {
  name: "HelloWorld",
  components: {
    dm_header,
    dm_footer
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // this.$http.getCarouselData().then(res => {
    //     console.log(res);
    //   });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-image: url("./img/lb1.jpg");
  background-size: cover;
  border: 1px solid deepskyblue;
}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url("./img/lb2.png");
  background-size: 602px 200px;
}
</style>
