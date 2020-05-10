<template>
  <div class="login">
    <dm_login></dm_login>
    <dm_footer></dm_footer>
  </div>
</template>

<script>
import dm_footer from "../footer/footer.vue";
import dm_login from "./dm_login/dm_login.vue";
export default {
  name: "HelloWorld",
  components: {
    dm_footer,
    dm_login
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
