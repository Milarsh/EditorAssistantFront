import { useMutation, type UseMutationOptions } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'

import type { ErrorApi, ErrorApiPayload } from '@/shared/api/model'

type AppMutationOptions<TData, TVariables, TContext> = UseMutationOptions<
  AxiosResponse<TData>,
  AxiosError<ErrorApi>,
  TVariables,
  TContext
>

export function useAppMutation<TData, TVariables, TContext = unknown>(
  options: AppMutationOptions<TData, TVariables, TContext>,
) {
  const mutation = useMutation(options)

  const normalizedError: ErrorApiPayload | null =
    mutation.error?.response?.data?.error ?? null

  return {
    ...mutation,
    normalizedError,
  }
}
