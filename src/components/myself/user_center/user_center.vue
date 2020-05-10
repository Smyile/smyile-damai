<template>
  <div class="user_center">
    <div class="dm_coupon_right">
      <div class="navigation">
        <a href="#">我的大麦</a>
        <span>&gt;</span>
        <span class="cur">订单管理</span>
      </div>
      <hr />
      <div id="container">
        <div class="order-list">
          <div class="order-list-wrapper" data-spm="list" style="display: block;">
            <div class="next-row order-list-header">
              <div class="next-col project-name" style="width: 390px;">项目名称</div>
              <div class="next-col ticket-number" style="width: 144px;">票品张数</div>
              <div class="next-col order-amount" style="width: 130px;">订单金额</div>
              <div class="next-col transaction-status" style="width: 130px;">交易状态</div>
              <div class="next-col transaction-operation" style="width: 210px;">交易操作</div>
              <el-input placeholder="请输入内容" @keydown="dm_uc_search" prefix-icon="el-icon-search" v-model="input2"></el-input>
            </div>
            <div class="next-loading order-list-container">
              <div class="next-loading-component">
                <div
                  class="next-col order-list-item"
                  v-for="(message,index) in message"
                  :key="index"
                  data-spm="item_0"
                >
                  <div class="next-row order-list-item-header">订单号：{{message.orderNo}}</div>
                  <div class="next-row order-list-item-bottom">
                    <div class="next-col project-name" style="width: 390px;">
                      <div class="next-row project-name-wrapper" data-spm="list">
                        <div class="next-col next-col-4 project-name-img" data-spm="ditem_0">
                          <img src="static\img\cardimg2.jpg" alt />
                        </div>
                        <div class="next-col project-name-content" data-spm="ditem_0">
                          <div class="next-row project-name">{{message.itemName}}</div>
                          <div class="next-row project-name-perform">
                            <span>演出场次：{{message.sellTime}}</span>
                          </div>
                          <div class="next-row project-name-venue">演出场馆：MAO Livehouse上海</div>
                          <div class="next-row pick-type-icon undefined"></div>
                        </div>
                      </div>
                    </div>
                    <div class="next-col ticket-number" style="width: 144px;">
                      <div class="next-row ticket-number-wrapper">{{message.num}}</div>
                    </div>
                    <div class="next-col order-amount" style="width: 130px;">
                      <div class="next-col order-amount-wrapper">
                        <div class="next-row order-amount-content">{{message.unitPrice}}</div>
                        <div class="next-row transportation-costs">(含运费￥5.00)</div>
                      </div>
                    </div>
                    <div class="next-col transaction-status" style="width: 130px;">
                      <div class="next-col transaction-status-wrapper">
                        <div class="next-row transaction-status-content">交易关闭</div>
                        <div class="next-row" data-spm="list">
                          <a
                            data-spm="ddetail_0"
                            href="https://orders.damai.cn/orderDetail?orderId=899920771954560171"
                          >订单详情</a>
                        </div>
                      </div>
                    </div>
                    <div class="next-col transaction-operation" style="width: 210px;">
                      <div class="next-col transaction-operation-wrapper">
                        <div class="text-wrapper">
                          <div
                            class="next-row pick-seat-info"
                            data-exp="true"
                            within24="false"
                            ic_id="612969846702"
                            usercode="155912048"
                            data-spm="dnotice"
                            data-aplus-ae="x1_2c24cbd1"
                            data-spm-anchor-id="a2oeg.orderlist.item_0.dnotice.6edc1ae6T9pLlV"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="next-col order-list-item" data-spm="item_1">
                  <div class="next-row order-list-item-header">订单号：899765090765560171</div>
                  <div class="next-row order-list-item-bottom">
                    <div class="next-col project-name" style="width: 390px;">
                      <div class="next-row project-name-wrapper" data-spm="list">
                        <div class="next-col next-col-4 project-name-img" data-spm="ditem_1">
                          <img />
                        </div>
                        <div class="next-col project-name-content" data-spm="ditem_1">
                          <div class="next-row project-name">2020年春季巧虎大型舞台剧《什么都有专卖店》上海美琪站</div>
                          <div class="next-row project-name-perform">
                            <span>演出场次：2020.05.30 10:00</span>
                          </div>
                          <div class="next-row project-name-venue">演出场馆：美琪大戏院</div>
                          <div class="next-row pick-type-icon undefined"></div>
                        </div>
                      </div>
                    </div>
                    <div class="next-col ticket-number" style="width: 144px;">
                      <div class="next-row ticket-number-wrapper">3</div>
                    </div>
                    <div class="next-col order-amount" style="width: 130px;">
                      <div class="next-col order-amount-wrapper">
                        <div class="next-row order-amount-content">￥1098.00</div>
                        <div class="next-row transportation-costs">(含运费￥18.00)</div>
                      </div>
                    </div>
                    <div class="next-col transaction-status" style="width: 130px;">
                      <div class="next-col transaction-status-wrapper">
                        <div class="next-row transaction-status-content">交易关闭</div>
                        <div class="next-row" data-spm="list">
                          <a
                            data-spm="ddetail_1"
                            href="https://orders.damai.cn/orderDetail?orderId=899765090765560171"
                          >订单详情</a>
                        </div>
                      </div>
                    </div>
                    <div class="next-col transaction-operation" style="width: 210px;">
                      <div class="next-col transaction-operation-wrapper">
                        <div class="text-wrapper">
                          <div
                            class="next-row pick-seat-info"
                            data-exp="true"
                            within24="false"
                            ic_id="611135760841"
                            usercode="155912048"
                            data-spm="dnotice"
                            data-aplus-ae="x2_8d2a4c8"
                            data-spm-anchor-id="a2oeg.orderlist.item_1.dnotice.6edc1ae6T9pLlV"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="next-row order-errors" style="display: none;">
            <div class="next-col error-image">
              <img src="https://img.alicdn.com/tfs/TB11puPCgmTBuNjy1XbXXaMrVXa-238-168.png" />
            </div>
            <div class="next-col error-text">
              <div class="next-row error-msg"></div>
            </div>
          </div>
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
      message: {},
      input2:''
    };
  },
  methods: {
    dm_uc_search(){
      console.log('ok')
    }
  },
  mounted() {
    this.$http
      .postRequest({
        type: "queryOrderList",
        data: {
          itemTypeId: "1"
        }
      })
      .then(res => {
        console.log(res);
        this.message = res.data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.order-list-header .el-input{
  width: 14%;
  position: absolute;
  top: 0;
  right: 0;
}
.next-row {
  margin: 5px;
}
.dm_coupon_right {
  margin-top: 40px;
  padding-bottom: 15px;
}
.navigation {
  line-height: 17px;
  font-size: 12px;
  color: #000;
  margin: 20px 0;
}
.cur {
  color: #9b9b9b;
}
.order-list {
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  margin-top: 20px;
}
.order-list-header {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  background: #f7f7f7;
  color: #333;
  padding: 12px 0 12px 20px;
  height: 40px;
  line-height: 16px;
  display: flex;
  position: relative;
}
.next-row {
  text-align: left;
}
.order-list-item {
  width: 100%;
  margin-bottom: 10px;
  line-height: 16px;
  border: 1px solid #ebebeb;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.order-list-item-header {
  padding: 14px 0 14px 20px;
  background: #f7f7f7;
  color: #000;
  border-bottom: 1px solid #ebebeb;
}
.order-list-item .order-list-item-bottom {
  padding-left: 20px;
  display: flex;
  padding-bottom: 20px;
}
</style>
