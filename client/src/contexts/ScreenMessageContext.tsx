import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

type Types = 'warning' | 'success' | 'info' | 'default'

export const types: { [key: string]: Types } = {
  danger: 'warning',
  success: 'success',
  info: 'info',
  default: 'default',
}

export interface MessageContext {
  message: string
  type: Types
}
interface ShareData {
  data: MessageContext
  setData: Dispatch<SetStateAction<MessageContext>>
}

export const ScreenMessageContext = createContext<ShareData>({} as ShareData)

export const ScreenMessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<MessageContext>({
    message: 'default',
    type: 'default',
  })
  const shareData: ShareData = {
    data: message,
    setData: setMessage,
  }
  return <ScreenMessageContext.Provider value={shareData}>{children}</ScreenMessageContext.Provider>
}

export const useScreenMessage = () => {
  const screenMessageContext = useContext(ScreenMessageContext)
  if (!screenMessageContext) {
    throw new Error('useScreenMessage debe estar dentro de su provider')
  }

  return screenMessageContext
}
