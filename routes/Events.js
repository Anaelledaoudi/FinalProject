import express from 'express';
import { AddEvent, DelEvent, GetEmail, GetEvents, SendEmail } from '../controllers/Events.js';

const router = express.Router();

router.post('/addEvent',AddEvent);
router.get('/getEvents',GetEvents);
router.put('/delEvent/:id',DelEvent);
router.get('/getEmail/:id',GetEmail);
router.get('/sendEmail/:id/:q',SendEmail);
export default router;