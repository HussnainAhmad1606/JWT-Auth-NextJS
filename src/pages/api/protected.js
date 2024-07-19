import { verifyToken } from '@/utils/jwt';
import auth from "@/middlewares/auth"
import connectDB from '@/middlewares/connectDB';
const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET;

const dataHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }


  try {
   
    res.status(200).json({ data: 'This is protected data', user: decoded.id });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const applyMiddlewares = (...middlewares) => (handler) => {
  return middlewares.reduce((acc, middleware) => middleware(acc), handler);
};


export default applyMiddlewares(connectDB, auth)(dataHandler);
