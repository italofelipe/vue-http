<template>
  <div id="app" class="container">
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="large"
          v-model="cliente.usuario"
          placeholder="Informe o seu nome."
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email:">
        <b-form-input
          type="email"
          size="large"
          v-model="cliente.email"
          placeholder="Informe o seu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Profissão">
        <b-form-input
          type="text"
          size="large"
          v-model="cliente.profissao"
          placeholder="Informe a sua profissão"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Idade">
        <b-form-input
          type="number"
          size="small"
          v-model="cliente.idade"
          placeholder="Informe a sua idade"
        ></b-form-input>
      </b-form-group>
      <b-button @click="submitForm" size="large" variant="primary">Cadastrar</b-button>
      
    </b-card>
    <hr />
    <Users :user="this.dados" />
    <b-list-group>
      <b-list-group-item v-for="(cliente, id) in dados" :key="id">
        <strong>Nome: {{cliente.usuario}}</strong>
        <br />
        <p>Email: {{cliente.email}}</p>
        <p>Idade: {{cliente.idade}}</p>
        <p>Profissão: {{cliente.profissao}}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import Users from "./components/Users";
export default {
  components: {
    Users
  },
  data() {
    return {
      cliente: {
        usuario: "",
        idade: null,
        profissao: "",
        email: ""
      },
      dados: []
    };
  },
  methods: {
    submitForm() {
      this.$http.post("usuarios.json", this.cliente).then(res => {
        console.log(res);
        this.cliente.usuario = "";
        this.cliente.idade = null;
        this.cliente.profissao = "";
        this.cliente.email = "";
      });
      this.fetchData();
    },
    fetchData() {
      this.$http.get("usuarios.json").then(res => {
        this.dados = res.data;
        console.log(this.dados);
      });
    }
  },
  created() {
    this.fetchData();
  },
  updated() {
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
