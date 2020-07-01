import { Router } from 'express';

const router = Router();

router.post('/api/users/signOut', (req, res) => {
  req.session = null;

  res.send({});
});

export { router as signOutRouter };
