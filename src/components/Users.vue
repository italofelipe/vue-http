<template>
  <div>
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
export default {
  name: "Users",
  data() {
    return { dados: [] };
  },
  props: ["user"],
  created() {
    this.$http.get("usuarios.json").then(res => {
      this.dados = res.data;
      console.log(this.dados.email);
      this.fetchData();
    });
  },
  methods: {
    fetchData() {
      this.$http.get("usuarios.json").then(res => {
        this.dados = res.data;
        console.log(this.dados);
      });
    }
  }
};
</script>
<style scoped>
</style>