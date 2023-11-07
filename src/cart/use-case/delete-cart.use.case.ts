import { UseCase } from 'src/core/use-case/use-case'
import { CartRepository } from '../domain/repositories/cart.repository'

export class DeleteCartUseCase implements UseCase {
  constructor(private readonly cartRepository: CartRepository) {}

  async perform(id: string): Promise<boolean> {
    return await this.cartRepository.delete(id)
  }
}
