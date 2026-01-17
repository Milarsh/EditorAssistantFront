import { useMutation } from '@tanstack/react-query'

import { type AuthRegisterConfirmRequest, httpClient } from '@/shared/api'

export const useConfirmEmail = () => {
  // const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (values: AuthRegisterConfirmRequest) =>
      httpClient.api.authRegisterConfirm(values),

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
