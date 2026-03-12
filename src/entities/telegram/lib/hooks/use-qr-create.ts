// import { useQueryClient } from '@tanstack/react-query'

import { httpClient, type TgAuthStatus } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

type Params = {
  force?: boolean
}

export const useQrCreate = () => {
  // const queryClient = useQueryClient()

  return useAppMutation<TgAuthStatus, Params>({
    mutationFn: (values: Params) => httpClient.api.tgAuthQrCreate(values),

    // onSuccess: () => {},
  })
}
