import express from 'express';
import { AddEvent, DelEvent, GetEmail, GetEvents } from '../controllers/Events.js';

const router = express.Router();

router.post('/addEvent',AddEvent);
router.get('/getEvents',GetEvents);
router.put('/delEvent/:id',DelEvent)
router.post('getEmail/:id',GetEmail)
export default router;