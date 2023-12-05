<template>
  <section>
    <h1>Explore Destinos Espaciais</h1>
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
    }
  },
  mounted() {
    this.isLoading = true;
    this.$store.dispatch('destinos/fetchDestinos')
      .then(() => {
        this.isLoading = false;
      });
  }
};
</script>
