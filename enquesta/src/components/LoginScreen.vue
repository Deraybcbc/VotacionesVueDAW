<script setup>
import {useLoginScreen} from '@/composable/components/useLoginScreen.js'

const login = useLoginScreen();
</script>

<template>
    <!-- Formulario centrado -->
    <q-page-container>
      <div class="q-pa-md flex flex-center full-height">
        <q-form
          @submit="login.dataUser"
          class="q-gutter-md card bordered shadow-2 q-px-lg q-py-lg"
          style="width: 400px; max-width: 90%;">

          <h3 class="text-center q-mb-lg">Login</h3>

          <!--Username-->
          <q-input
            filled
            v-model="login.name.value"
            label="Your name"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'No puede estar vacio']"
          />

          <!--Password-->
          <q-input
            filled
            type="password"
            v-model="login.password.value"
            label="Your password"
          />

          <div class="flex justify-center q-mt-md">
            <q-btn label="Acceder" type="submit" color="primary"/>
          </div>
        </q-form>
      </div>
    </q-page-container>
</template>

<style></style>
