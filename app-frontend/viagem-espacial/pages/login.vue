<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="senha" placeholder="Senha" required>
      <button type="submit">Login</button>
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
    login() {
      this.$axios.post('/api/auth/login', {
        email: this.email,
        senha: this.senha
      })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/'); // Redirecionar para a página inicial
        })
        .catch(error => console.error(error));
    }
  }
};
</script>
