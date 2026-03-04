import { Router } from 'express';
import {
  splitHandler,
  concatHandler,
  concatQueryHandler,
  leapHandler,
  secretHandshakeHandler
} from '../controllers/logicController';

const router = Router();

router.get('/split/:input', splitHandler);

router.get('/concat/:str1/:str2', concatHandler);

router.get('/concat-query', concatQueryHandler);

router.get('/leap/:year', leapHandler);

router.get('/secret-handshake/:number', secretHandshakeHandler);

export default router;