import { ref } from 'vue';
import { registerUser, loginUser, logoutUser } from '@/services/firebaseService';

export function useAuth() {
  const user = ref(null);
  const error = ref<string | null>(null);

  const register = async (email: string, password: string) => {
    error.value = null;
    try {
      user.value = await registerUser(email, password);
      console.log('user', JSON.stringify(user.value));
      return user.value;
    } catch (err: any) {
      console.log('Acá hubo un error');
      return error.value = err;
    }
  };

  const login = async (email: string, password: string) => {
    error.value = null;
    try {
      user.value = await loginUser(email, password);
      console.log('user', JSON.stringify(user.value));
      return user.value;
    } catch (err: any) {
      console.log('Acá hubo un error');
      return error.value = err;
    }
  };

  const logout = async () => {
    error.value = null;
    try {
      await logoutUser();
      user.value = null;
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return {
    user,
    error,
    register,
    login,
    logout
  };
}
