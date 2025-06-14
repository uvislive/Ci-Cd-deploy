import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export const useEditUserForm = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      // dob: null,
      gender: '',
      email: '',
      isActive: false,
    },
  });

  useEffect(() => {
    // fetch data and populate form
    const fetchUser = async () => {
      const userData = {
        name: 'John Doe',
        // dob: new Date('1990-01-01'),
        gender: 'male',
        email: 'john@example.com',
        isActive: true,
      };
      reset(userData);
    };

    fetchUser();
  }, [reset]);

  const onSubmit = (data: any) => {
    console.log('Editing:', data);
    // API call to update user
  };

  return { control, handleSubmit, onSubmit };
};
