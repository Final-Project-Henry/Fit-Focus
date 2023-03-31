import React from 'react'
import { RootState as DefaultRootState } from 'redux/store'

export interface RouteInterface {
  path: string
  title: string
  component: React.ReactNode
  layout: string
  role: string
}

export type userLoginInterface = {
  loadingUserLogin?: boolean
  successUserLogin?: boolean
  errorUserLogin?: string
  userInfo?: {
    _id?: string
    name?: string
    email?: string
    plan?: string
    lastLogin?: string
    fav?: []
    status?: string
    isAdmin?: boolean
    isSuper?: boolean
    token?: string
  }
}

export type RootState = DefaultRootState & {
  userLogin?: userLoginInterface
}
