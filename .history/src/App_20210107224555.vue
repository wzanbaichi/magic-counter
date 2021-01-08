<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="readFile">读取</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import XLSX from 'XLSX'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    readFile() {
      function readWorkbookFromLocalFile(file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var data = e.target.result;
          var workbook = XLSX.read(data, { type: 'binary' });
          if (callback) callback(workbook);
        };
        reader.readAsBinaryString(file);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background: #00000018;
}
</style>
