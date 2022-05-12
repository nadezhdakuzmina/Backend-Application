/* import { FrigeItem } from './models'; */

import type { Request, Response } from 'express';
import type { DataSource } from 'typeorm';
/* 
export const changeStatus = async (req: Request, res: Response, sourseData: DataSource) => {
  const {
    foodID,
    isChecked
  } = req.body;

  const frigeItemRepository = sourseData.getRepository(FrigeItem);
  const frige = await frigeItemRepository.findOne({
    relations: ['foods'],
    where: {
      foods: {
        id: foodID,
      },
    },
  });

};


export const addItem = async (req: Request, res: Response, sourseData: DataSource) => {
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

  card.isChecked = isChecked;

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
 */