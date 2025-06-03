import { useState } from 'react';
import Input from './Input';
import Button from './Button';

type AuthFormProps = {
  type: 'login' | 'signup';
  onSubmit: (email: string, password: string) => void;
};

const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center capitalize">{type}</h2>
      <Input label="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input label="Password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button>{type === 'login' ? 'Log In' : 'Sign Up'}</Button>
    </form>
  );
};

export default AuthForm;
