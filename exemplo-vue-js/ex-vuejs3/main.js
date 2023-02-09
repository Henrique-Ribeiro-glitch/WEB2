var vue = new Vue({
  el: "#app",
  data: {
    quantity: 0
  },
  computed: {
  },
  methods: {
    add() {
      this.quantity++
    },
    sub() {
      if (this.quantity > 0) {
        this.quantity--
      }
    }
  }
});
