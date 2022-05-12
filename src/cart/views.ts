import { CartItem } from './models';

import type { Request, Response } from 'express';
import type { DataSource } from 'typeorm';

export const changeStatus = async (req: Request, res: Response, sourseData: DataSource) => {
  const {
    foodID,
    isChecked
  } = req.body;

  const cartItemRepository = sourseData.getRepository(CartItem);
  const card = await cartItemRepository.findOne({
    relations: ['foods'],
    where: {
      foods: {
        id: foodID,
      },
    },
  });

  if (card) {
    res.json({
      error: `cannot find item with id='${foodID}'`,
    });

    return;
  }

  card.isChecked = isChecked

  await sourseData.manager.save(card);

  res.json({
    message: "successfuly",
  });
};


export const addItem = async (req: Request, res: Response, sourseData: DataSource) => {
  const {
    foodID,
    userID
  } = req.body;

  const user = 'Это твой юзер, его нужно найти';
  const food = 'Это твой фуд, его нужно найти тоже';

  const card = new CartItem();

  // ВНИМАНИЕ!!! @ts-ignore я написал для примера, убери его когда найдешь пользователя и фуд

  // @ts-ignore
  card.foods = [food];

  // @ts-ignore
  card.users = [user];

  card.isChecked = false;

  await sourseData.manager.save(card);

  res.json({
    message: "successfuly",
  });
};

export const deleteItem = async (req: Request, res: Response, sourseData: DataSource) => {
  const {
    foodID,
    userID
  } = req.body;

  const cartItemRepository = sourseData.getRepository(CartItem);
  const card = await cartItemRepository.findOne({
    relations: ['foods', 'users'],
    where: {
      foods: {
        id: foodID
      },
      users: {
        id: userID
      },
    },
  });
await sourseData.manager.remove(card);
res.json({
  message: "successfuly",
});
};

export const cartList = async (req: Request, res: Response, sourseData: DataSource) => {
  const cart = await sourseData.manager.find(CartItem);

  res.json({
    cart: cart,
  });
};
