import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';

import { mainRouter } from './controller';

import User from 'src/user';

import Food from 'src/food';

import { PORT } from '@constants';
import CartItem from 'src/cart';

export const app = express();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'topsecret',
  database: 'kuzmina',
  synchronize: true,
  entities: [User, Food, CartItem],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then((connection) => app.listen(PORT, () => {
    app.use(express.json());
    app.use(mainRouter(connection));
    console.log(`Application listening on port ${PORT}`);
  }))
  .catch((error) => console.log(error));
