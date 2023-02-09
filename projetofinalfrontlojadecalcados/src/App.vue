<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper green darken-1" >
        <a href="#" class="brand-logo center">Cadastro de calçados</a>
      </div>
    </nav>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <form @submit.prevent="saveAndUpdateCalcado">
      <div>
        <input type="text" v-model="calcado.marca" placeholder="Digite a marca">
      </div>
      <div>
        <input type="number" v-model="calcado.numero" placeholder="Digite o número">
      </div>
      <div>
        <input type="text" v-model="calcado.material" placeholder="Digite o tipo de material">
      </div>
      <div>
        <input type="text" v-model="calcado.preco" placeholder="Digite o preço">
      </div>
      <button class="waves-effect waves-light btn-small">Salvar</button>
      <button v-show="calcado.id" @click="calcelUpdate" class="waves-effect waves-light btn-small">Cancelar</button>
    </form>

    <form @submit.prevent="findById">
      <div>
        <input type="text" v-model="calcado.id" placeholder="Digite o código do calçado que deseja ver">
      </div>
      <button class="waves-effect waves-light btn-small">Pesquisar</button>
    </form>

    <div v-show="findCalcado.id">
      <h1>Calçado encontrado</h1>
      <p>
        Código: {{findCalcado.id}} <br>
        Marca: {{findCalcado.marca}} <br>
        Número: {{findCalcado.numero}} <br>
        Material: {{findCalcado.material}} <br>
        Preço: {{findCalcado.preco}} <br>
      </p>
    </div>

    <p>Quantidade de calcados: {{calcados.length}}</p>

    <table v-show="calcados.length > 0">
      <thead>
        <tr>
          <th>Código</th>
          <th>Marca</th>
          <th>Número</th>
          <th>Material</th>
          <th>Preco</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Código</th>
          <th>Marca</th>
          <th>Número</th>
          <th>Material</th>
          <th>Preco</th>
          <th>Excluir</th>
          <th>Alterar</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="calcado in calcados"  :key="calcado.id">
          <td>{{calcado.id}}</td>
          <td>{{calcado.marca}}</td>
          <td>{{calcado.numero}}</td>
          <td>{{calcado.material}}</td>
          <td>{{calcado.preco}}</td>
          <td>
          <button type="button" @click="deleteCalcado(calcado)" class="waves-effect waves-light btn-small">Excluir</button>
          </td>
          <td>
          <button type="button" @click="updateCalcado(calcado)" class="waves-effect waves-light btn-small">Alterar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Contatos</h2>
    <p>Git: https://github.com/Henrique-Ribeiro-glitch/</p>
    <p>E-mail: hj777457@gmail.com</p>
  </div>

</template>

<script>
import CalcadoServices from './services/calcadoservices'

export default {
  data() {
    return {
      calcado : {
        id: '',
        marca: '',
        numero: '',
        material: '',
        preco: ''
      },
      findCalcado : {
        id: '',
        marca: '',
        numero: '',
        material: '',
        preco: ''
      },
      calcados: []
    }
  },
  name: 'App',
  components: {
  },
  mounted() {
    this.listaDeCalcados();
  },
  methods: {
    listaDeCalcados() {
      CalcadoServices.findAll().then(response => {
        this.calcados = response.data;
      });
    },
    saveAndUpdateCalcado() {
      if(!this.calcado.id) {
        CalcadoServices.save(this.calcado).then(response => {
          this.listaDeCalcados();
          this.calado = {};
          alert("Calçado adicionado!");
          return response;
        });
      } else {
        CalcadoServices.update(this.calcado).then(response => {
          this.listaDeCalcados();
          this.calado = {};
          alert("Calçado alterado!");
          return response;
        });
      }
    },
    deleteCalcado(calcado) {
      if (confirm("Deseja realmente excluir este calçado?")) {
        CalcadoServices.delete(calcado).then(response => {
          this.listaDeCalcados();
          alert("Calçado excluido!");
          return response;
        });
      }
    },
    findById() {
      CalcadoServices.findById(this.calcado).then(response => {
        this.findCalcado = response.data;
      });
    },
    updateCalcado(calcado) {
      this.calcado = calcado;
    },
    calcelUpdate() {
      this.calcado = {};
      alert("Alteração cancelada!");
    }
  }
}
</script>

<style>

button {
  margin: 7px;
}

nav {
  margin-bottom: 30px;
}

form {
  margin-bottom: 30px;
}

table {
  margin-top: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
