import { BaseStateModel } from './baseStateModel'

export interface UserModel_ {
  username: string
  password: string
}

export interface UserStateModel_ extends BaseStateModel {
  data: UserModel[]
}

export type UserModel = UserModel_
export type UserStateModel = UserStateModel_
