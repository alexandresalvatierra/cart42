export interface FindAllRepository<T> {
  findAll(): Promise<T[] | false>
}
