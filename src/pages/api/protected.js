import { verifyToken } from '@/utils/jwt';

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

const dataHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ data: 'No token provided' });
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = verifyToken(token, SECRET_KEY);
    res.status(200).json({ data: 'This is protected data', user: decoded.id });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default dataHandler;
