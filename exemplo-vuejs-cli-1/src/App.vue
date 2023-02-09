<template>
  <div id="app">
    <Ola message="System" />
      <Image1 />
    <HelloWorld msg="Welcome"/>
    <Form />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ola from './components/Ola.vue'
import Image1 from './components/Image1.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Ola,
    Image1,
    Form
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
</style>
