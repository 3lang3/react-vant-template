import { Notify } from "react-vant"

export const checkResponse = (res: Record<string, any>) => {
  if (res.type === 1) Notify.show({ message: res.message, type: 'primary' })
}