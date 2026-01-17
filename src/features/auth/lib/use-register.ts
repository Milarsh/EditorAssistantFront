import { useMutation } from '@tanstack/react-query'

import { type AuthRegisterRequest, httpClient } from '@/shared/api'

export const useRegister = () => {
  // const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (values: AuthRegisterRequest) =>
      httpClient.api.authRegister(values),

    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: sourcesQueryKeys.list().queryKey,
    //   })
    //   const { order } = useArticlesFeedStore.getState()
    //
    //   queryClient.invalidateQueries({
    //     queryKey: articlesQueryKeys.list({ order }).queryKey,
    //   })
    // },
  })

  return { mutateAsync, isPending }
}
