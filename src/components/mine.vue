<template>
    <div class="main">
        <header>
            <transition :name="transitionName">
                <router-link to="/selfinfo" class="child-view"><img src="../assets/icon_setting.png" alt=""/></router-link>
            </transition>
        </header>
        <section class="content">
            <div class="mine_head has_v"><img src="../assets/default_head.png" alt=""/></div>
            <p class="mine_name">fenbid-A</p>
            <div class="mine_info">
                <div class="mine_info_item">
                    <p><span>86.00</span> 元</p>
                    <p>我的余额</p>
                </div>
                <div class="mine_info_item">
                  <p><span>86.00</span> 元</p>
                  <p>我的积分</p>
                </div>
            </div>

        </section>
        <ul class="my_link">
            <li v-for="items in link"><router-link :to="items.path"><img :src="items.src" alt=""/><p>{{items.text}}</p></router-link></li>
            <!--<li><router-link to=""><img src="../assets/mine_link02.png" alt=""/><p>邀请好友</p></router-link></li>
            <li><router-link to=""><img src="../assets/mine_link03.png" alt=""/><p>消费记录</p></router-link></li>
            <li><router-link to=""><img src="../assets/mine_link04.png" alt=""/><p>发票管理</p></router-link></li>
            <li><router-link to=""><img src="../assets/mine_link05.png" alt=""/><p>考试成绩</p></router-link></li>-->
        </ul>
    </div>
</template>

<script>
import pic01 from "../assets/mine_link01.png"
import pic02 from "../assets/mine_link02.png"
import pic03 from "../assets/mine_link03.png"
import pic04 from "../assets/mine_link04.png"
import pic05 from "../assets/mine_link05.png"
export default {
    name: 'app',
    data(){
        return{
          link:[
            {path:'',src:pic01,text:'会员中心'},
            {path:'',src:pic02,text:'邀请好友'},
            {path:'',src:pic03,text:'消费记录'},
            {path:'',src:pic04,text:'发票管理'},
            {path:'',src:pic05,text:'考试成绩'}
          ],
          transitionName: 'slide-left'
        }

    }
}
</script>
<style scoped>
a{text-decoration: none;display: block}
.main{
    position: relative;
    font-size: 0.28rem;
    height: 100%;
}
.content{
    background: url("../assets/mine_bg.png") no-repeat center top;
    height: 6.22rem;
    background-size: 100% auto;
    padding-top: 1.28rem;
    text-align: center;
    color: #fff;
}
header{
    height: 0.84rem;
    z-index: 2;
    position: absolute;
    width: 100%;
    top: 0.44rem;
    left: 0;
    text-align: right;
}
header a{
    display: inline-block;
    line-height: 0.84rem;
    margin-right: 0.47rem;
}
img{
    vertical-align: middle;
    width: 0.35rem;
}
.mine_head{
    width: 1.86rem;
    height: 1.86rem;
    border-radius: 50%;
    background: #e7f4fc;
    margin: 0 auto;
    border: 3px solid #fff;
    position: relative;
}
.mine_head img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.has_v:after{
    content: '';
    position: absolute;
    width: 0.52rem;
    height: 0.52rem;
    background: url("../assets/v.png") no-repeat;
    background-size: 100% auto;
    right: 0;
    bottom: -0.1rem;
}
.mine_name{
    font-size: 0.3rem;
    text-align: center;
    margin: 0.2rem 0 0.4rem;
}
.mine_info{
    display: flex;
    align-items: center;
    justify-content: center;
}
.mine_info_item{
    flex: 1;
    font-size: 0.28rem;
    position: relative;
}
.mine_info_item:first-child:after{
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background: #fff;
    top: 0;
    right: 0;
    -webkit-transform: scaleX(.5);
    transform: scaleX(.5);
}
.mine_info_item p:first-child{
  font-size: 0.22rem;;
}
.mine_info_item span{
  font-size: 0.42rem;
  box-shadow: 0 3px 3px rgba(6,136,227,0.35);
}
.my_link{
  margin: 0;
  padding: 0 0.1rem;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.my_link li{
  width: 33.33%;
  margin: 0.45rem 0 0.22rem;
}
.my_link li img{
  width: 1.36rem;
}
.my_link li p{
  font-size: 0.3rem;
  color: #333;
}

</style>

</style>
