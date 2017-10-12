<template>
    <div id="login">
        <img src="../../static/images/login-bg.jpg" alt="login-bg" class="login-bg">
        <div class="container input-box">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="inputEmail3" class="col-xs-2 control-label text-center">账号</label>
                    <div class="col-xs-10">
                        <input v-model="user" type="text" class="form-control" placeholder="请输入账号">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-xs-2 control-label text-center">密码</label>
                    <div class="col-xs-10">
                        <input v-model="password" type="password" class="form-control" placeholder="请输入密码">
                    </div>
                </div>
                <div class="form-group login-btn">
                    <div class="col-xs-12">
                        <button @click.stop="login" class="btn btn-info col-xs-12">登陆</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import util from '../assets/js/util.js'
export default {
    name: 'login',
    data() {
        return {
            user: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            this.$http.get('/Home/Login', {
                params: {
                    user: this.user,
                    password: this.password
                }
            }).then(res=> {
                if(res.data.State){
                    util.user=this.user;
                    this.router.replace('./home/ranking')                   
                }else{
                    alert('账号或密码错误')
                }
            }).catch(err=> {
                alert('请求失败');
            });
        }
    }
}
</script>

<style scoped>
.login-bg {
    width: 100%;
    height: auto;
}

.input-box {
    margin-top: 0.5rem;
}

.input-box label {
    height: 34px;
    line-height: 34px;
    margin-bottom: 0;
    padding: 0;
}

.login-btn {
    margin-top: 0.5rem;
}
</style>
