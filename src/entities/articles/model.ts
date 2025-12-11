import { ArticlesListParamsOrderEnum } from '@/shared/api'

export type ArticlesListParams = {
  limit?: number
  offset?: number
  source_id?: number
  q?: string
  date_from?: string
  date_to?: string
  order?: ArticlesListParamsOrderEnum
}
