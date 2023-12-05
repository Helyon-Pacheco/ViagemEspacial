<template>
  <div class="destino-card">
    <img :src="destino.imagem" :alt="destino.nome" />
    <h3>{{ destino.nome }}</h3>
    <p>{{ destino.descrição }}</p>
    <!-- Outras informações do destino -->
  </div>
</template>

<script>
export default {
  props: {
    destino: Object
  }
};
</script>
