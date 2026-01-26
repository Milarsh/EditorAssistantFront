import {
  type AuthRegisterPendingResponse,
  type AuthRegisterRequest,
  httpClient,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

export const useRegister = () => {
  return useAppMutation<AuthRegisterPendingResponse, AuthRegisterRequest>({
    mutationFn: (values: AuthRegisterRequest) =>
      httpClient.api.authRegister(values),
  })
}
