import { useMutation } from '@tanstack/react-query'

import { type AuthRegisterRequest, httpClient } from '@/shared/api'

export const useRegister = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (values: AuthRegisterRequest) =>
      httpClient.api.authRegister(values),
  })

  return { mutateAsync, isPending }
}
