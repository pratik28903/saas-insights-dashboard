import { Router } from 'express';
import { registerUser } from '../controllers/user.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/register', registerUser);
router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'Private profile accessed', user: (req as any).user });
});

export default router;
