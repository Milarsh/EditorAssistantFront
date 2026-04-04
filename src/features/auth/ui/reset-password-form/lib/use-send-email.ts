import {
  httpClient,
  type PasswordSendCodeRequest,
  type PasswordSendCodeResponse,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

export const useSendEmail = () => {
  return useAppMutation<PasswordSendCodeResponse, PasswordSendCodeRequest>({
    mutationFn: (values: PasswordSendCodeRequest) =>
      httpClient.api.authPasswordSendCode(values),
  })
}
