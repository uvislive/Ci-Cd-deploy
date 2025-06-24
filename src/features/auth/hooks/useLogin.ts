// features/auth/hooks/useLogin.ts
import { useState } from 'react';

interface LoginPayload{
    email:string,
    password:string
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async ({ email, password }: LoginPayload) => {
    setIsLoading(true);
    setError(null);
    try {
      // fake delay
      await new Promise((res) => setTimeout(res, 1000));
      
      if (email === 'admin@example.com' && password === 'admin') {
        console.log('Login success');
        // You can update context / redux here
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
