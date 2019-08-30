<template>
    <div class="page">
        <Header/>
        <router-link
        class="back"
        to="/movie"
        tag="span"
        >&lt;</router-link>
        <ul class="denglu_menu_switch">
            <router-link 
                class="denglu_menu_active"
                tag="li"
                to="/mine/meituan"
                >美团账号登录</router-link>
            <router-link
                tag="li"
                to="/mine/phone"
            >手机验证登录</router-link>
        </ul>
       <keep-alive>
           <router-view></router-view>
       </keep-alive>
    </div>
</template>
<script>
export default {
    name:"Mine"
}
</script>
<style scoped>
.page{
    height: 100%;width: 100%;
    background: #F8F8F8;
}
.back{
    position: relative;z-index: 100;
    font-size:1rem;color: #ffffff;
    top: -.2rem;left: .2rem;
}
.denglu_menu_switch{
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;   
    border-bottom:2px solid #F8F8F8;
}
.denglu_menu_switch li{
    height: 100%;
    line-height: 1rem;
    padding: 0 .8rem;
    font-size: .3rem;    
}
.denglu_menu_switch li:active{
    border-bottom: 2px solid #FFC300;
}
</style>
