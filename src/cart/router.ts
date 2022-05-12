import { Router } from 'express';

import { cartList, addItem, deleteItem, changeStatus } from './views';

import type { DataSource } from 'typeorm';

export const cartItemRouter = (sourseData: DataSource) => {
  const router = Router();

  router.get('/', (req, res) => cartList(req, res, sourseData));
  router.post('/add', (req, res) => addItem(req, res, sourseData));
  router.get('/delete', (req, res) => deleteItem(req, res, sourseData));
  router.post('/get', (req, res) => changeStatus(req, res, sourseData));
  return router;
}
