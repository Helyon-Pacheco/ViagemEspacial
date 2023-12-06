<template>
  <div>
    <h1>Registrar</h1>
    <form @submit.prevent="register">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="senha" placeholder="Senha" required>
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: ''
    };
  },
  methods: {
    register() {
      this.$axios.post('/api/auth/registrar', {
        email: this.email,
        senha: this.senha
      })
        .then(() => this.$router.push('/login'))
        .catch(error => console.error(error));
    }
  }
};
</script>
