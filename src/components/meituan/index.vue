<template>
    <div>
        <input type="text" placeholder="账号名/手机号/Email">
        <input type="password" placeholder="请输入您的密码">
        <button class="loginIn">登录</button>
        <div class="subline">
        <router-link to="signIn"
        tag="a">立即注册</router-link>
        <router-link to="zhaohui"
        tag="a">找回密码</router-link>
        </div>
        <p>@猫眼电影 客服电话：400-670-5335</p>
    </div>
</template>
<script>
export default {
    name:"Meituan"
}
</script>
<style scoped>
input{
    width: 100%; height: 1rem;
    display: block;
    outline: none; border: none;
    padding-left: .3rem;  
}
input:nth-child(1){
    border-bottom: 1px solid #f8f8f8;
}
.loginIn{
    background: red;
    border: none;
    width: 7rem;height: .7rem;
    margin-left: .3rem;
    margin-top: .5rem;
}
.subline{
    padding: 0 .3rem;
    margin-top: .3rem;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    display: flex;
}
.subline a{
    color:#FAB74D;
    font-size: .3rem;   
}
p{
    margin-top: .3rem;
    display: flex;
    justify-content: center;
}
</style>
