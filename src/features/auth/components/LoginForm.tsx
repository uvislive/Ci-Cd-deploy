// features/auth/components/LoginForm.tsx
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { login } from '../services/authService';
import type { LoginData } from '../types';

const LoginForm = () => {
  const { control, handleSubmit } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <TextField {...field} label="Email" fullWidth />} />

      <Controller
        name="password"
        control={control}
        render={({ field }) => <TextField {...field} label="Password" type="password" fullWidth />} />

      <Button type="submit" variant="contained">Login</Button>
    </form>
  );
};

export default LoginForm;