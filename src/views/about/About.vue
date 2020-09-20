<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changeMsg">changeMsg</button>
    <router-view :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data() {
    return {
      msg: 'aaa'
    }
  },
  methods: {
    changeMsg() {
      this.msg = Math.random() * 1000 + "";
    }
  },
  mounted() {
    console.log("mountedAbount");
    this.changeMsg();
  }
  
  
}
</script>
