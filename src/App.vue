<template>
  <div id="app">
    <dm_sidebar></dm_sidebar>
    <router-view />
  </div>
</template>

<script>
import dm_sidebar from "./components/sidebar/sidebar";
export default {
  name: "App",
  components: {
    dm_sidebar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.starrr{
  color: #ff1268;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #ff1268;
  /* text-decoration: underline; */
}
</style>
