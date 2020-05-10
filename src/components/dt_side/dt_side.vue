<template>
  <div class="dt_sidd"  v-show="sid_fir">
    <div class="dt_sid_fir" @click="f_sid_fir(710)">
      <a href="#"><p>活动介绍</p></a>
    </div>
    <div class="dt_sid_fir"  @click="f_sid_fir(3600)">
      <a href="#"><p>购票须知</p></a>
    </div>
    <div class="dt_sid_fir" @click="f_sid_fir(4200)">
      <a href="#"><p>观演须知</p></a>
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
    f_sid_fir(num){
      console.log(num);
      // window.scrollTo(0,num);
    }
  },
  mounted() {
    document.addEventListener('scroll',(res)=>{
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ;
      this.dm_scroll=scrollTop;
      if( this.dm_scroll>710){
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

.dt_sidd {
  width: 80px;
  position: fixed;
  right: 10px;
  top: 35.5%;
  margin-top: -105px;
  text-align: center;
  z-index: 9999;

}
.dt_sid_fir {
  height: 24px;
  line-height: 24px;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
  color: #111;
  font-size: 12px;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: content-box;
  box-shadow: 2px 2px 2px #999;
  background-color: rgba(110, 103, 206, 0.445);
}

.dt_sid_fir p {
  margin: 0;
  margin: 5px;
  font-size: 12px;
}
.dt_sid_fir span {
  display: inline-block;
  margin: 0 auto;
  background-image: url("./img/sld.png");
  width: 32px;
  height: 29px;
  background-size: 100%;
}
</style>
