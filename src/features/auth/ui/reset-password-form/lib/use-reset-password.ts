import {
  httpClient,
  type PasswordResetRequest,
  type PasswordResetResponse,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

export const useResetPassword = () => {
  return useAppMutation<PasswordResetResponse, PasswordResetRequest>({
    mutationFn: (values: PasswordResetRequest) =>
      httpClient.api.authPasswordReset(values),
  })
}
