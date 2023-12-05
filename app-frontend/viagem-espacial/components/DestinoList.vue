<template>
  <ul>
    <li v-for="destino in destinos" :key="destino.id">
      {{ destino.nome }}
      <button @click="selecionar(destino)">Selecionar</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    destinos: Array
  },
  methods: {
    selecionar(destino) {
      this.$emit('selecionarDestino', destino);
    }
  }
};
</script>
