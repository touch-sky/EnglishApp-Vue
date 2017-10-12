<template>
  <div id="personal">
    <!-- <div class="personal-img">
        <img :src="'data:image/png;base64,'+formData['头像']" alt="#">
        <input class="select" type="file" @change="change($event)">
        <p>点击修改头像</p>
      </div> -->
    <div class="container input-box">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-xs-2 control-label text-center">用户</label>
          <div class="col-xs-10">
            <input v-model="formData['用户名']" type="text" class="form-control" placeholder="请输入账号">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-2 control-label text-center">手机</label>
          <div class="col-xs-10">
            <input v-model="formData['电话']" type="text" class="form-control" placeholder="请输入手机号">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-2 control-label text-center">姓名</label>
          <div class="col-xs-10">
            <input v-model="formData['姓名']" type="text" class="form-control" placeholder="请输入姓名">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-2 control-label text-center">性别</label>
          <div class="col-xs-10">
            <select v-model="formData['性别']" class="form-control">
              <option>男</option>
              <option>女</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-2 control-label text-center">邮箱</label>
          <div class="col-xs-10">
            <input v-model="formData['邮箱']" type="text" class="form-control" placeholder="请输入邮箱">
          </div>
        </div>
        <div class="form-group">
          <label class="col-xs-2 control-label text-center">学校</label>
          <div class="col-xs-10">
            <input v-model="formData['学校']" type="text" class="form-control" placeholder="请输入学校">
          </div>
        </div>
        <div class="form-group login-btn">
          <div class="col-xs-12">
            <button class="btn btn-info col-xs-12">保存</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import util from '../assets/js/util.js'
export default {
  name: 'personal',
  data() {
    return {
      user: '',
      imgFile: '',
      formData: {
        '头像': '',
        '姓名': '',
        '学校': '',
        '性别': '男',
        '用户名': '',
        '电话': '',
        '邮箱': ''
      }
    }
  },
  mounted: function() {
    // 请求数据
  },
}
</script>

<style scoped>
#personal {
  margin-top: 60px;
}

.personal-img {
  text-align: center;
  margin-bottom: 20px;
}

.personal-img img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.personal-img p {
  font-size: 0.12rem;
  margin: 0;
}

.input-box label {
  height: 34px;
  line-height: 34px;
  margin-bottom: 0;
  padding: 0;
}
</style>