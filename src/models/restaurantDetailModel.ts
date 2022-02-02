import { BaseStateModel } from './baseStateModel'

export interface RestaurantDetailModel_ {
  id: number
  name: string
  address: string
  description: string
  image: string
  turns: TurnModel_[]
}

export interface TurnModel_ {
  id: number
  name: string
}

export interface RestaurantDetailStateModel_ extends BaseStateModel {
  data: RestaurantDetailModel
}

export type RestaurantDetailModel = RestaurantDetailModel_
export type RestaurantDetailStateModel = RestaurantDetailStateModel_
export type TurnModel = TurnModel_
