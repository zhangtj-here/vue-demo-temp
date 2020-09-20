<template>
  <div class="hello">
    <h1>aaa</h1>
    <h1>id: {{ $route.params.id }}</h1>
    <p>{{msg}}</p>
    <button @click="ToB">go to B</button>

    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>
import {getUrl} from "../../api"
import axios from "axios";
const CancelToken = axios.CancelToken;
let cancel;

export default {
  name: 'A',
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
    Interval() {
      // this.Timeline = setInterval(() => {
      //   // console.log("A");
      //   // console.log(getUrl);
      // }, 1000);
      // window.timeLine = setTimeout(() => {
        // function toGetHttp() {
        //   cancel("请求失败");
        //   getHttp();
        // }
        // let x = 10;

        // function sleep(seconed) {
        //   var oldDate = +new Date();
        //   while(x === 10) {
        //     if ((+new Date() - oldDate) > seconed){
        //       return;
        //     }
        //   }
        // }

        let self = this;

        function getHttp() {
          // debugger;
          if (self && self._isDestroyed) return;
          getUrl(
            {
              cancelToken: new CancelToken(function executor(c) {
                // executor 函数接收一个 cancel 函数作为参数
                cancel = c;
              })
            }
          )
            .then(res => {
                console.log(res)
                getHttp();
              })
              .catch(err => {
                console.log(err);
                // sleep(1000);
                getHttp();
                // toGetHttp();
                // setTimeout(() => {getHttp();}, 1000)
                
              })
        }
        getHttp();
      // }, 0) 
      
    },
    ToB() {
      this.$router.push({path: "/about/aaa/bbb"});
    }
  },
  beforeCreate() {
    console.log("beforeCreatea");
  },
  mounted() {
    // clearTimeout(window.timeLine);
    this.Interval();
  },
  beforeMount() {
    console.log("beforeMounta");
  },
  beforeDestroy() {
    cancel();
    // clearTimeout(window.timeLine);
    console.log("beforeDestroya");
    // clearInterval(this.Timeline)
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
