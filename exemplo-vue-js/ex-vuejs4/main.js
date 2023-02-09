var vue = new Vue({
  el: "#app",
  data: {
    name: "Henrique",
    grade1: 10,
    grade2: 6,
    status: false
  },
  computed: {
    avarage() {
      return (this.grade1 + this.grade2) / 2;
    }
  },
  methods: {

  }
});
