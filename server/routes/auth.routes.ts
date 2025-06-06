import { Router } from 'express';
import { registerUser } from '../controllers/user.controller';
import { loginUser } from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
