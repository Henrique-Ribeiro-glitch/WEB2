var vue = new Vue({
  el: "#app",
  data: {
    name: "Henrique"
  },
  computed: {

  },
  methods: {
    sendMSG() {
      console.log("Oi" + this.name);
      alert("Oi " + this.name);
    }
  }
});
