import {
  ArticlesListParamsOrderEnum,
  ArticlesListParamsRelevanceEnum,
  ArticlesListParamsTrendEnum,
} from '@/shared/api'

export type ArticlesListParams = {
  limit?: number
  offset?: number
  source_id?: number
  q?: string
  date_from?: string
  date_to?: string
  order?: ArticlesListParamsOrderEnum
  rubric_id?: number
  trend?: ArticlesListParamsTrendEnum
  relevance?: ArticlesListParamsRelevanceEnum
}
