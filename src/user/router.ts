import { Router } from 'express';

import { getUser, createUser, userList } from './views';

import type { DataSource } from 'typeorm';

export const userRouter = (sourseData: DataSource) => {
  const router = Router();

  router.get('/', (req, res) => userList(req, res, sourseData));
  router.post('/create', (req, res) => createUser(req, res, sourseData));
  router.get('/get', (req, res) => getUser(req, res, sourseData));

  return router;
}
