import express from 'express';
const router = express.Router();

import { Login, Register } from '../controllers/Users.js';

router.post('/signup', Register);
router.post('/signin', Login);

export default router;
