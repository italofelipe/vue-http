<template>
  <div>
    <h4>Users Component</h4>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return { dados: [] };
  },
  created() {
    this.$http.get("usuarios.json").then(res => {
      this.dados = res.data;
      console.log(this.dados.email);
    });
  }
};
</script>
<style scoped>
</style>