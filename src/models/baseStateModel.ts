interface BaseStateModel_ {
  code?: number
  status: 'loading' | 'success' | 'error'
  message?: string
}

export type BaseStateModel = BaseStateModel_
