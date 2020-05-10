<template>
  <div class="index">
    <dm_header></dm_header>
    <dm_banner></dm_banner>
    <dm_content></dm_content>
    <dm_footer></dm_footer>
    
  </div>
</template>

<script>
import dm_footer from "../footer/footer.vue";
import dm_header from "../header/header";
import dm_banner from "../banner/banner";
import dm_content from "../content/content";
export default {
  name: "HelloWorld",
  components: {
    dm_header,
    dm_footer,
    dm_banner,
    dm_content,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
<style scoped>
</style>
