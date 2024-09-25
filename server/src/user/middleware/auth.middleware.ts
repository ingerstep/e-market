import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { Injectable, NestMiddleware } from '@nestjs/common';

import { User } from '../user.entity';
import { UserService } from '../user.service';

export interface ExpressRequest extends Request {
  user?: User;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}
  async use(req: ExpressRequest, res: Response, next: NextFunction) {
    if (!req.headers['authorization']) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers['authorization'].split(' ')[1];

    try {
      const decode = verify(token, process.env.JWT_SECRET) as { email: string };
      const user = await this.userService.findByEmail(decode.email);
      req.user = user;
      next();
    } catch (err) {
      console.log(err);
      req.user = null;
      next();
    }
  }
}
