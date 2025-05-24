<script setup>
import {useVotacionsScreeen} from "@/composable/components/useVotacionsScreeen.js";

const votacion = useVotacionsScreeen();
</script>

<template>
  <q-page-container>
    <div class="q-pa-md flex flex-center wrap full-height">
      <h2>Bienvenido {{ votacion.loginInfo.username }}</h2>

      <div v-for="(votos, index) in votacion.votosStore.infoVotos" class="q-pa-md q-gutter-sm flex flex-center q-mt-md q-mb-md">
        <p>{{ votos }}</p>
        <q-btn class="glossy" @click="votacion.votar(index)" round color="deep-orange" icon="local_activity"/>
      </div>

    </div>
  </q-page-container>
</template>

<style scoped></style>
