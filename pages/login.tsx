import AuthForm from '../components/AuthForm';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Login failed');
      }

      const data = await res.json();
      console.log('✅ Login success:', data);

      // Optionally: save JWT token to cookies or localStorage
      // localStorage.setItem('token', data.token);

      router.push('/feed'); // Go to home/feed after login
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <AuthForm type="login" onSubmit={handleLogin} />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </>
  );
};

export default Login;
