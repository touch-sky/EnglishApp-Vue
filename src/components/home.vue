<template>
  <div id="home">
    <h5 class="top-title">排行榜</h5>
    <router-view></router-view>
    <div class="bottom-box box box-lr">
      <router-link to="/home/ranking" class="box box-tb box-pack-around box-align-center">
        <span class="glyphicon glyphicon-road"></span>
        <span>排行榜</span>
      </router-link>
      <router-link to="/home/book" class="box box-tb box-pack-around box-align-center">
        <span class="glyphicon glyphicon-book"></span>
        <span>词书</span>
      </router-link>
      <router-link to="/home/record" class="box box-tb box-pack-around box-align-center">
        <span class="glyphicon glyphicon-bookmark"></span>
        <span>签到</span>
      </router-link>
      <router-link to="/home/personal" class="box box-tb box-pack-around box-align-center">
        <span class="glyphicon glyphicon-user"></span>
        <span>个人中心</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '我是主页'
    }
  }
}
</script>

<style scoped>
.bottom-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border-top: 1px solid #ccc;
  height: 50px;
  background-color: #fff;
}

.bottom-box a {
  width: 25%;
  text-decoration: none;
  color: #666;
  border-left: 1px solid #ccc;
}

.router-link-active {
  background-color: #5bc0de;
  color: #fff!important;
}

.bottom-box li:first-child {
  border-left: none;
}

.top-title {
  height: 40px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
  padding: 0;
  margin: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
}
</style>