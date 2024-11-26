import {useUserStore} from '@/stores/user';
import {ref, onMounted, onBeforeMount} from "vue";
import {useRouter} from 'vue-router';

export function useLoginScreen() {
  const userStore = useUserStore();
  const router = useRouter();
  const name = ref('');
  const password = ref();

  function dataUser() {
    const data = {
      loggedIn: true,
      name: name.value,
      password: password.value
    }
    userStore.setLoginInfo(data);

    router.push({
      path: `/votacion`,
    })
  };


  onBeforeMount(() => {

  });

  onMounted(() => {

  });

  return {
    name,
    password,
    dataUser
  }
}
