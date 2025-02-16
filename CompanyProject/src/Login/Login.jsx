import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Login.css';
const schema = yup.object().shape({
  loginInput: yup
    .string()
    .required('Email or phone number is required')
    .test(
      'emailOrPhone',
      'Please enter a valid email or phone number',
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || // Email regex
        /^\d{10}$/.test(value) // Phone number regex (10 digits)
    ),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert('Login Successful');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email or Phone Number</label>
          <input
            type="text"
            {...register('loginInput')}
            placeholder="Enter your email or phone number"
          />
          <p className="error">{errors.loginInput?.message}</p>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register('password')}
            placeholder="Enter your password"
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
