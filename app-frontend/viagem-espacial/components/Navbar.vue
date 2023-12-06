<template>
  <nav>
    <!-- Outros itens de navegação -->
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout');
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
};
</script>
