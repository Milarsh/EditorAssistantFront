import { useMutation } from '@tanstack/react-query'

import { type AuthRegisterConfirmRequest, httpClient } from '@/shared/api'

export const useConfirmEmail = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (values: AuthRegisterConfirmRequest) =>
      httpClient.api.authRegisterConfirm(values),
  })

  return { mutateAsync, isPending }
}
