import { Router } from 'express';

const router = Router();

router.post('/api/users/signOut', (req, res) => {
  res.send('Hi there');
});

export { router as signOutRouter };
