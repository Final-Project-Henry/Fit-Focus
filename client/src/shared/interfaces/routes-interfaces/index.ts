import React from 'react'
import { RootState as DefaultRootState } from 'redux/store'

export interface RouteInterface {
  path: string
  title: string
  component: React.ReactNode
  layout: string
  role: string
}

export type RootState = DefaultRootState & {
  userLogin: {
    userInfo: {
      token: string | null
    } | null
  }
}
