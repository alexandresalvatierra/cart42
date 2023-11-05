export interface FindOneRepository<T> {
  findOne(id: any): Promise<T | false>
}
