import { Request, Response } from 'express'
/* import { AuthService } from "./auth.service"
const authService = new AuthService();*/
import { CartModel } from '../../../database/models/cart.model'

export class CartController {
  async index(req: Request, res: Response) {
    res.json('list carts')
  }

  async create(req: Request, res: Response) {
    //const { name, email, password } = req.body;

    try {
      const cartModel = await CartModel.create({
        created_at: new Date(),
      })
      res.send(cartModel)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }

    /* const cartModel = new CartModel({
      created_at: new Date()
    });

    try {
      await cartModel.save();
      res.send(CartModel);
    } catch (error) {
      res.status(500).send(error);
    } */
  }
}
