import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import User from 'src/user';
import Card from 'src/cart';
// import Food from 'src/food';
import FrigeItem from 'src/frige';

import { DataSource } from 'typeorm';
import { mainRouter } from './controller';

import { PORT } from '@constants';

export const app = express();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'topsecret',
  database: 'kuzmina',
  synchronize: true,
  entities: [User, /* Food, */ Card, FrigeItem],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then((connection) => app.listen(PORT, () => {
    app.use(bodyParser.json());
    app.use(cors())
    app.use(mainRouter(connection));
    console.log(`Application listening on port ${PORT}`);
  }))
  .catch((error) => console.log(error));
