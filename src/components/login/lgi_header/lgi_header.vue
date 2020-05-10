<template>
  <div class="lgi_header">
      <router-link to="/">
        <img class="logo_lgi" src="./img/logo_lgi.png" alt />
      </router-link>
      <div class="english_lgi">English</div>
      <!-- <img src="./img/dm_lgi_t.png" alt=""> -->
    </div>
</template>


<script>

export default {
  name: "HelloWorld",
  components: {
  },
  data() {
    return {
     
    };
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.lgi_header {
  width: 1200px;
  margin: 0 auto;
  height: 90px;
}
.logo_lgi {
  float: left;
  margin-top: 24px;
  width: 108px;
  height: 48px;
  color: -webkit-link;
  cursor: pointer;
}
.english_lgi {
  float: right;
  margin-top: 24px;
  width: 121px;
  height: 38px;
  line-height: 38px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #ebebeb;
  font-size: 14px;
  color: #888;
  text-decoration: none;
}
</style>
