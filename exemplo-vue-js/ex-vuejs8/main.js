var vue = new Vue({
  el: "#app",
  data: {
    name: ""
  },
  computed: {

  },
  methods: {
    add() {
      alert("Seu nome é: " + this.name)
    }
  }
});
