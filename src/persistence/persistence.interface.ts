import { BaseModel } from "../report/base.model"

export interface PersistenceInterface<T> {
    save(element: T): boolean
    get(id: BaseModel["id"]): T | undefined
    remove(id: BaseModel["id"]): boolean
    getAll(): T[]
}
