import express from 'express';
import Arithmetic from '../handlers/arithmetic';

const router = express.Router()

router.post('/', Arithmetic.processEntries)

export default router;