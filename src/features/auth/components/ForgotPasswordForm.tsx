import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { forgotPassword } from '../services/authService';
import type { ForgotPasswordData } from '../types';

const ForgotPasswordForm = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordData>();

  const onSubmit = async (data: ForgotPasswordData) => {
    await forgotPassword(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <TextField {...field} label="Email" fullWidth />} />

      <Button type="submit" variant="contained">Send Reset Link</Button>
    </form>
  );
};

export default ForgotPasswordForm;