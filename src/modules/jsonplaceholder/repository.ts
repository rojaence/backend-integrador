import { jsonPlaceholderApi } from "../../apis/jsonplaceholder.api";
import { BASE_URL_JSONPLACEHOLDER_API } from "../../environment/env";
import { IUser } from "./interfaces";

export default class JsonplaceholderRepository {
  async GetAxiosUsers(): Promise<IUser[]> {
    const response = await jsonPlaceholderApi.get<IUser[]>('/users')
    return response.data
  }

  async GetFetchUsers(): Promise<IUser[]> {
    const response = await fetch(`${BASE_URL_JSONPLACEHOLDER_API}/users`)
    const data = await response.json() as IUser[]
    return data
  }

}