import {
  type AuthRegisterConfirmRequest,
  type AuthRegisterConfirmResponse,
  httpClient,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

export const useConfirmEmail = () => {
  return useAppMutation<
    AuthRegisterConfirmResponse,
    AuthRegisterConfirmRequest
  >({
    mutationFn: (values: AuthRegisterConfirmRequest) =>
      httpClient.api.authRegisterConfirm(values),
  })
}
