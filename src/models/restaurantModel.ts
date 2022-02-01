import { BaseStateModel } from './baseStateModel'

export interface RestaurantModel_ {
  id: number
  name: string
  address: string
  description: string
  image: string
}

export interface RestaurantStateModel_ extends BaseStateModel {
  data: RestaurantModel[]
}

export type RestaurantModel = RestaurantModel_
export type RestaurantStateModel = RestaurantStateModel_
