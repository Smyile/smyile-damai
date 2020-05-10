<template>
  <div class="sidebar">
    <div class="sid_fir">
      <span style="background-position: 3px -30px;"></span>
      <a href="#"><p>在线客服</p></a>
    </div>
    <div class="sid_fir">
      <span></span>
      <a href="#"><p>APP下载</p></a>
    </div>
    <div class="sid_fir" v-show="sid_fir" @click="f_sid_fir">
      <span style="background-position: 3px 30px;"></span>
      <a href="#"><p>回到顶部</p></a>
    </div>
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      'sid_fir':false,
      'dm_scroll':0
    };
  },
  methods: {
    f_sid_fir(){
      window.scrollTo(0,0);
    }
  },
  mounted() {
    document.addEventListener('scroll',(res)=>{
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ;
      this.dm_scroll=scrollTop;
      if( this.dm_scroll>50){
        this.sid_fir=true;
      }else{
        this.sid_fir=false;
      }
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.sidebar {
  width: 80px;
  position: fixed;
  right: 10px;
  top: 65.5%;
  margin-top: -105px;
  text-align: center;
  z-index: 9999;

}
.sid_fir {
  height: 60px;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
  padding-top: 10px;
  color: #111;
  font-size: 12px;
  /* border-radius: 50%; */
  cursor: pointer;
  box-sizing: content-box;
  background-color: rgba(110, 103, 206, 0.445);
}

.sid_fir p {
  margin: 0;
  margin: 5px;
  font-size: 12px;
}
.sid_fir span {
  display: inline-block;
  margin: 0 auto;
  background-image: url("./img/sld.png");
  width: 32px;
  height: 29px;
  background-size: 100%;
}
</style>
