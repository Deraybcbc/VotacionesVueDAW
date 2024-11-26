<script>
import {RouterLink, RouterView} from 'vue-router'
import {ref} from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
    }
  },
}
</script>

<template>
  <q-layout view="hHh lpR fFf" class="q-pa-md full-height">

    <!-- Header (Navbar) -->
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn-icons-png.flaticon.com/512/1582/1582013.png"/>
          </q-avatar>
          Votaciones
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <RouterView/>
  </q-layout>


</template>
