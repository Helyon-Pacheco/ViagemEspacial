<template>
  <section>
    <h1>Explore Destinos Espaciais</h1>
    <button @click="logout">Logout</button>
    <div v-if="isLoading">Carregando...</div>
    <div v-else>
      <DestinoList :destinos="destinos" @selecionarDestino="selecionarDestino" />
    </div>
  </section>
</template>

<script>
import DestinoList from '~/components/DestinoList.vue';

export default {
  components: {
    DestinoList
  },
  data() {
    return {
      isLoading: false,
      destinoSelecionado: null
    };
  },
  computed: {
    destinos() {
      return this.$store.state.destinos.destinos;
    }
  },
  methods: {
    selecionarDestino(destino) {
      this.destinoSelecionado = destino;
      console.log('Destino selecionado:', this.destinoSelecionado);
    },
    logout() {
      this.$store.commit('logout');
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  mounted() {
    this.isLoading = true;
    this.$store.dispatch('destinos/fetchDestinos')
      .then(() => {
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Erro ao buscar destinos:', error);
        this.isLoading = false;
      });
  }
};
</script>

<style>
</style>
