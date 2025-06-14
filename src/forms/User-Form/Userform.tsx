import {
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';
import { Controller } from 'react-hook-form';

type Props = {
  control: any;
  handleSubmit: (onValid: (data: any) => void) => (e?: React.BaseSyntheticEvent) => void;
  onSubmit: (data: any) => void;
};

const UserForm: React.FC<Props> = ({ control, handleSubmit, onSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px',width:"500px",height:"auto",paddingTop:'20px',paddingBottom:'20px' }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField {...field} label="Name" fullWidth />}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select {...field} label="Gender">
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => <TextField {...field} label="Email" type="email" fullWidth />}
      />

      <Controller
        name="isActive"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={!!field.value} />}
            label="Is Active"
          />
        )}
      />

      <Button variant='contained' type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
