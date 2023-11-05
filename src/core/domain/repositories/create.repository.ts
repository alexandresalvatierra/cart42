export interface CreateRepository<T> {
  create(entity: T): Promise<T | false>
}
