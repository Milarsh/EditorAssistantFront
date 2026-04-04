import {
  ArticlesListParamsOrderEnum,
  ArticlesListParamsRelevanceEnum,
  ArticlesListParamsStopWordsEnum,
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
  stop_words?: ArticlesListParamsStopWordsEnum
  trend?: ArticlesListParamsTrendEnum
  relevance?: ArticlesListParamsRelevanceEnum
}
