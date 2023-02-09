var vue = new Vue({
  el: "#app",
  data: {
    "name" : "Henrique",
    "lastName" : "Júnior"
  },
  computed: {
    getfullName() {
      // return this.name + "" + this.lastName
      return `${this.name} ${this.lastName}`;
    }
  }
});
