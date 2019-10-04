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
    <Users />
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
      }
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
    }
  }

  // Método updated foi removido pq embora ele atualizasse em tempo real os clientes que foram cadastrados, causava a página multiplos re-renders
  // e se notar na aba de Network do console do chrome, poderíamos ver que ele de fato fazia infinitas requisições ao servidor, causando sobrecarga

  // updated() {
  //   this.fetchData();
  // }
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
