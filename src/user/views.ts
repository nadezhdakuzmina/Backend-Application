import { User } from './models';

import type { Request, Response } from 'express';
import type { DataSource } from 'typeorm';

export const createUser = async (req: Request, res: Response, sourseData: DataSource) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const user = new User();
  user.email = email;
  user.username = username;
  user.password = password; // TODO: сделать шифрование

  if (await sourseData.manager.findOneBy(User, { email })) {
    res.json({
      error: 'such email already exists',
    });

    return;
  }

  try {
    const createdUser = await sourseData.manager.save(user);

    res.json({
      message: 'successfuly created new user',
      userID: createdUser.id,
    });
  } catch(error) {
    res.json({
      error: 'unexpacted error',
    });
  }
};

export const userList = async (req: Request, res: Response, sourseData: DataSource) => {
  const users = await sourseData.manager.find(User);

  res.json({
    users: users,
  });
};

export const getUser = async (req: Request, res: Response, sourseData: DataSource) => {
  const id = Number(req.query.id);

  if (isNaN(id)) {
    res.json({
      error: 'invalid id',
    });

    return;
  }

  const user = await sourseData.manager.findOneBy(User, { id });

  if (!user) {
    res.json({
      error: 'no such user exists',
    });

    return;
  }

  res.json({
    user,
  });
};
