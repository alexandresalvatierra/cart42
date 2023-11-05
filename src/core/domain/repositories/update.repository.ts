export interface UpdateRepository<T> {
  update(entity: T, id: any): Promise<T | false>
}
