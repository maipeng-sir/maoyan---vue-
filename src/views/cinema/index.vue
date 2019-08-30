<template>
  <div class="page">
      <Header/>
    <div id="cinema_content">
      <div class="cinema_nav">
        <ul>
          <li>
            <span>全城</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>品牌</span>
            <i class="iconfont">&#xe627;</i>
          </li>
          <li>
            <span>特色</span>
            <i class="iconfont">&#xe627;</i>
          </li>
        </ul>
      </div>
     <div class="cinema_body">
          <v-touch class="cinema_body_detail"
          v-for="(item,index) in cinemas" 
          :key="index" tag="div"> 
            <div class="cinema_body_detail_name">
                <span>{{item.nm}}</span>
                <span class="cinema_price">{{item.sellPrice}}元起</span>
            </div>
            <div class="cinema_body_detail_address">
                <span>{{item.addr}}</span>
                <span>{{item.distance}}</span>
            </div>
            <div class="cinema_body_detail_card">
                <div>小吃卡</div>
                <div>折扣卡</div>
            </div>
          </v-touch>
     </div>
    </div>
  </div>
</template>
<script>
import { cinemas_api } from "api/api";
export default {
    name:"Cinema",
    async created(){
    let data = await cinemas_api(this.cityId); 
    this.cinemas =data.data.cinemas;
    console.log(data.data.cinemas)
  },
    data(){
        return{
            cinemas:[],
        }
    }
}

</script>
<style>
.page {
  height: 100%;
}

/*cinema*/

#cinema_content{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top:1rem;
}
#cinema_content .cinema_nav{
    width: 100%;
    position: fixed;
    height: .92rem;
    border-bottom: 1px solid #ccc;
    z-index: 2;
    background: #fff;
}
#cinema_content .cinema_nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
#cinema_content .cinema_nav ul li{
    width: 100%;
    text-align: center;
    font-size:.3rem;
}

/*cinema_body*/

.cinema_body{
    position: relative;
    top:.92rem;
    left:0;
    padding-left:.4rem;
    padding-right:.4rem;
    padding-bottom: 1rem;
    overflow-y: auto;
    height: calc(100% - 1rem); 
}
.cinema_body .cinema_body_detail{
    margin-top: .4rem;
    border-bottom:1px solid #ccc;
    background: #fff;
}
.cinema_body .cinema_body_detail>div{
    margin-bottom: .2rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name>span:nth-child(1){
    font-size:.35rem;
}
.cinema_body .cinema_body_detail .cinema_body_detail_name>span:nth-child(2){
    font-size:.3rem;
    color:#f03d37;
}
.cinema_body .cinema_body_detail .cinema_body_detail_address{
    display: flex;
    justify-content: space-between;
    font-size:.26rem;
    align-items: center;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card{
    display: flex;
}
.cinema_body .cinema_body_detail .cinema_body_detail_card>div {
    padding: 0 .06rem;
    height: .36rem;
    line-height: .36rem;
    border-radius: 2px;
    color: #f90;
    border: 1px solid #f90;
    font-size: .26rem;
    margin-right: 5px;
}
</style>