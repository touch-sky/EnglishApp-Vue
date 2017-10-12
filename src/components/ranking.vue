<template>
  <div id="ranking">
    <div class="raning-top-box box box-lr text-center">
      <div @click.stop="changeType(0)" class="flex" :class="{'active': type==0}">日榜</div>
      <div @click.stop="changeType(1)" class="flex" :class="{'active': type==1}">月榜</div>
      <div @click.stop="changeType(2)" class="flex" :class="{'active': type==2}">总榜</div>
    </div>

    <div class="ranking-wrap box box-tb">
      <div v-for="item in rankingData" class="box box-lr box-pack-start box-align-center ranking-box">
        <div class="ranking-num-box">
          <img v-if="item['排名']<=3" class="ranking-num" v-bind:src="'../../static/images/'+item['排名']+'.png'" alt="#" />
          <span v-else class="ranking-num-bottom ranking-num">{{item['排名']}}</span>
        </div>
        <div class="box box-lr ranking-avater-outbox">
          <div class="ranking-avater-box">
            <img class="ranking-avater" :src="'data:image/png;base64,'+item['头像']" alt="#" />
            <span v-if="item['会员']==1" class="rangking-vip">vip</span>
          </div>
          <img class="ranking-sex self-align-end" :src="item['性别']=='女'?'../../static/images/female.png':'../../static/images/male.png'" alt="#" />
        </div>
        <div class="box box-lr ranking-up-box">
          <img class="rangking-up " :src="item['升降']>=0?'../../static/images/up.png':'../../static/images/down.png'" alt="#" />
          <span class="self-align-end">{{item['升降']}}</span>
        </div>
        <div class="box box-tb box-align-center rangking-name-box">
          <span class="ranking-score text-info">{{item['积分']}}</span>
          <span class="ranking-name">{{item['用户名']}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '../assets/js/util.js'
export default {
  name: 'ranking',
  data: () => {
    return {
      user: '',
      type: 1,
      rankingData: []
    }
  },
  mounted: function() {
    this.user = util.user;
    this.forData();
  },
  methods: {
    forData: function() {
      this.$http.get('/Home/GetRankList', {
        params: {
          user: this.user,
          type: this.type
        }
      }).then(res => {
        console.log(JSON.parse(res.data));
        this.rankingData = JSON.parse(res.data);
      }).catch(err => {
        alert('请求失败');
      });
    },
    changeType: function(type) {
      this.type = type;
      this.forData();
    }
  }
}

</script>

<style scoped>
.raning-top-box {
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
}

.raning-top-box div {
  height: 40px;
  line-height: 40px;
  border-left: 1px solid #ccc;
}

.raning-top-box div:first-child {
  border-left: none;
}

.raning-top-box .active {
  background-color: #5bc0de;
  color: #fff!important;
}

.ranking-wrap {
  margin-top: 80px;
  margin-bottom: 50px;
}


.ranking-box {
  height: 80px;
  border-bottom: 1px solid #ccc;
  padding: 0 5px;
  text-align: center;
}

.ranking-box:last-child {
  border-bottom: none;
}

.ranking-num-box {
  width: 15%;
}

.ranking-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.ranking-num-bottom {
  display: inline-block;
  text-align: center;
  line-height: 30px;
}

.ranking-avater {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.ranking-sex {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.rangking-up {
  width: 20px;
  height: 20px;
}

.ranking-up-box {
  width: 15%;
}

.ranking-score {
  font-size: 0.28rem;
}

.ranking-name {
  font-size: 0.12rem;
}

.ranking-avater-outbox {
  width: 30%;
}

.ranking-avater-box {
  position: relative;
}

.rangking-name-box {
  width: 50%;
}

.rangking-vip {
  width: 20px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 50%;
  background-color: red;
  font-size: 12px;
  position: absolute;
  right: -5px;
  top: 0;
  color: #fff;
}
</style>