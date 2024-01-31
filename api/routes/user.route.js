import exprss from 'express';
import { test } from '../controller /user.controller.js';

const router = exprss.Router();

router.get('/test', test);

export default router;