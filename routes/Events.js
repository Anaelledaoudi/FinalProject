import express from 'express';
import { AddEvent, GetEvents } from '../controllers/Events.js';

const router = express.Router();

router.post('/addEvent',AddEvent);
router.get('/getEvents',GetEvents);
export default router;