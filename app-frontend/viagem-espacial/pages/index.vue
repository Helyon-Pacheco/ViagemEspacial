<template>
  <div class="home">
    <h1>Bem-vindo ao Planejador de Viagens Espaciais</h1>
    <p>Explore o universo virtualmente e planeje sua próxima aventura espacial.</p>
    <nuxt-link to="/destinos" class="explore-button">Explorar Destinos</nuxt-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      this.$store.commit('logout');
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.explore-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.explore-button:hover {
  background-color: #45a049;
}
</style>
