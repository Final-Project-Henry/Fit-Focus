import React from 'react'

export interface RouteInterface {
  path: string
  title: string
  component: React.ReactNode
  layout: string
  role: string[]
}
