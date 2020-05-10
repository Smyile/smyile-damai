<template>
  <div class="total_headerh">
        <div class="total_headerh_lab">
        </div>
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
.total_headerh span {
  color: aqua;
}
.total_headerh_lab {
  width: 1200px;
  margin: 0 auto;
  height: 50px;
}
.total_headerh {
  position: absolute;
  top: 70px;
  line-height: 50px;
  color: #666;
  font-size: 14px;
  width: 100%;
  background-image: -webkit-linear-gradient(
    top,
    #a19aa7b9,
    rgba(255, 255, 255, 0)
  );
}
</style>
