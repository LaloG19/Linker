import { ref } from 'vue';
import { registerUser, loginUser, logoutUser } from '@/services/firebaseService';

export function useAuth() {
  const user = ref(null);
  const error = ref<string | null>(null);

  const register = async (email: string, password: string) => {
    error.value = null;
    try {
      user.value = await registerUser(email, password);
    } catch (err: any) {
      error.value = err.message;
    }
  };

  const login = async (email: string, password: string) => {
    error.value = null;
    try {
      user.value = await loginUser(email, password);
    } catch (err: any) {
      error.value = err.message;
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
