<template>
  <div id="app">
    <h1 class="msg">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '词书'
    }
  }
}
</script>

<style scoped>
.msg {
  margin-top: 200px;
  text-align: center;
}
</style>