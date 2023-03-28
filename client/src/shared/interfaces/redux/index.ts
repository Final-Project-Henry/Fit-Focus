export interface PayloadError extends Error {
  response?: {
    data?: {
      message?: string
    }
    status?: number
  }
}
