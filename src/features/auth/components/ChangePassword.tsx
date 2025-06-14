import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { changePassword } from '../services/authService';
import type { ChangePasswordData } from '../types';

const ChangePasswordForm = () => {
  const { control, handleSubmit } = useForm<ChangePasswordData>();

  const onSubmit = async (data: ChangePasswordData) => {
    await changePassword(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Controller
        name="oldPassword"
        control={control}
        render={({ field }) => <TextField {...field} label="Old Password" type="password" fullWidth />} />

      <Controller
        name="newPassword"
        control={control}
        render={({ field }) => <TextField {...field} label="New Password" type="password" fullWidth />} />

      <Button type="submit" variant="contained">Change Password</Button>
    </form>
  );
};

export default ChangePasswordForm;