import { useForm } from 'react-hook-form';

export const useAddUserForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      dob: null,
      gender: '',
      email: '',
      isActive: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log('Adding:', data);
    // API call here
  };

  return { control, handleSubmit, onSubmit };
};
