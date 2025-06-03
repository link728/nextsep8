// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  // TODO: Validate credentials
  if (email === 'test@example.com' && password === 'secret') {
    return res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
}
