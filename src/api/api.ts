import { UsersDataType } from "../types/types"

export type GetItemsType = {
    items: Array<UsersDataType>
    totalCount: number
    error: string | null
}