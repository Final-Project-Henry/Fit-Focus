import { UserInfoInterface } from 'shared/interfaces/redux/payloads'

export const premiumValidation = (userInfo: UserInfoInterface) => {
  return userInfo && userInfo.plan === 'premium'
}
