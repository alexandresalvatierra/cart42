import { UseCase } from 'src/core/use-case/use-case'
import { ItemRepository } from '../domain/repositories/item.repository'

export class DeleteItemUseCase implements UseCase {
  constructor(private readonly itemRepository: ItemRepository) {}

  async perform(id: string): Promise<boolean> {
    return await this.itemRepository.delete(id)
  }
}
