import {ref, reactive, onBeforeMount, onMounted} from "vue";
import socket from "@/services/sockets.js";
import {useVotacionsStore} from "@/stores/votaciones.js";
import {useUserStore} from "@/stores/user.js";
import {useRouter} from 'vue-router';

export function useVotacionsScreeen() {
  const votosStore = useVotacionsStore();
  const votos = reactive(votosStore.infoVotos)
  const user = useUserStore();
  const loginInfo = reactive(user.loginInfo);
  const router = useRouter();

  onBeforeMount(() => {
    if (!loginInfo.loggedIn) {
      router.push({
        path: `/`
      })
    }

  });

  onMounted(() => {
    console.log("Votos Vue", votos)
  });

  function votar(index) {
    socket.emit('votacion', index);
  }

  socket.on('actualizacionVotos', (data) => {
    console.log("Llego", data);
    votosStore.setVotos(data);
  });

  return {
    votosStore,
    loginInfo,

    votar

  }
}
