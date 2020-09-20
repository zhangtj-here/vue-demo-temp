<template>
  <div class="hello">
    <h1>aaa</h1>
    <h1>id: {{ $route.params.id }}</h1>
    <p>{{msg}}</p>
    <button @click="ToA">go to A</button>

    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>

export default {
  name: 'B',
  props: {
    msg: String
  },
  data() {
    return {
      msg3: 'aaabbb'
    }
  },
  methods: {
    showMsg() {
      return this.msg;  
    },
    ToA() {
      // this.$router.push({path: "/about/aaa/aaa"});
      // debugger;
      this.$router.go(-1);
    },
    Interval() {
      this.Timeline = setInterval(() => {
        console.log("b");
      }, 1000);
    }
  },
  beforeCreate() {
    console.log("beforeCreateB");
  },
  beforeMount() {
    console.log("beforeMountB");
  },
  mounted() {
    this.Interval();
  },
  beforeDestroy() {
    console.log("beforeDestroyB");
    clearInterval(this.Timeline)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
