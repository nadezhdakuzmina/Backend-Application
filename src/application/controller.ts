import { Router } from 'express';

import { userRouter } from 'src/user';

import type { DataSource } from 'typeorm';

export const mainRouter = (dataSourse: DataSource) => {
  const router = Router();

  router.use('/users', userRouter(dataSourse));

  return router;
};
