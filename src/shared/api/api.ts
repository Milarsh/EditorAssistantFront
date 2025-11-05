/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  error: {
    /**
     * Машинно-читабельный код ошибки
     * @example "bad_request"
     */
    code: ErrorCodeEnum
    /** Человекочитаемое сообщение */
    message: string
    /** Простой request id (для логов) */
    request_id: string
    details?: Record<string, any>
  }
}

export interface SourceCreate {
  /** @minLength 1 */
  name: string
  /**
   * HTTP(S) RSS URL
   * @format uri
   */
  rss_url: string
  /** @default true */
  enabled?: boolean
}

export interface Source {
  id: number
  name: string
  /** @format uri */
  rss_url: string
  enabled: boolean
  /** UTC строка в формате "YYYY-MM-DD HH:MM:SS[.ffffff]" */
  created_at: string
}

export type SourcesList = Source[]

export interface Article {
  id: number
  source_id: number
  title: string
  /** @format uri */
  link: string
  description?: string | null
  guid: string
  /** UTC строка "YYYY-MM-DD HH:MM:SS[.ffffff]" */
  published_at?: string | null
  /** UTC строка "YYYY-MM-DD HH:MM:SS[.ffffff]" */
  fetched_at: string
}

export interface ArticlesList {
  total: number
  limit: number
  offset: number
  items: Article[]
}

export interface ArticleAssetsResponse {
  /** @example 327 */
  id: number
  assets: (AssetImage | AssetFile | AssetVideo)[]
}

export interface AssetImage {
  type: AssetImageTypeEnum
  /**
   * Локальный URL до файла
   * @example "/media/vk/-40316705/54155576/photo_1.jpg"
   */
  file_url: string
  /** @example "image/jpeg" */
  mime: string
  /** @example "photo_1.jpg" */
  name: string
}

export interface AssetFile {
  type: AssetFileTypeEnum
  /** @example "/media/vk/-40316705/54155576/doc_1.pdf" */
  file_url: string
  /** @example "application/pdf" */
  mime: string
  /** @example "doc_1.pdf" */
  name: string
}

export interface AssetVideo {
  type: AssetVideoTypeEnum
  /**
   * Встраиваемый плеер VK
   * @example "https://vk.com/video_ext.php?oid=-40316705&id=54155576&hd=2"
   */
  embed_url: string
  /**
   * Страница видео VK
   * @example "https://vk.com/video-40316705_54155576"
   */
  page_url?: string
  /**
   * URL постера (обычно локальный `/media/...`), если сохранён
   * @example "/media/vk/-40316705/54155576/video_poster.jpg"
   */
  poster?: string | null
}

/**
 * Машинно-читабельный код ошибки
 * @example "bad_request"
 */
export enum ErrorCodeEnum {
  BadRequest = 'bad_request',
  NotFound = 'not_found',
  Conflict = 'conflict',
  TooManyRequests = 'too_many_requests',
  MethodNotAllowed = 'method_not_allowed',
  NotImplemented = 'not_implemented',
  InternalError = 'internal_error',
  SourceError = 'source_error',
  ParserError = 'parser_error',
}

export enum AssetImageTypeEnum {
  Image = 'image',
}

export enum AssetFileTypeEnum {
  File = 'file',
}

export enum AssetVideoTypeEnum {
  Video = 'video',
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios'
import axios from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || 'http://localhost:8000',
    })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] =
        property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        )
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title Editor Assistant API
 * @version 1.0.0
 * @baseUrl http://localhost:8000
 *
 * Позволяет получать новости и их источники в формате JSON, проверять состояние сервиса.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  healthz = {
    /**
     * No description
     *
     * @tags Health
     * @name HealthzList
     * @summary Проверка состояния сервиса
     * @request GET:/healthz
     */
    healthzList: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/healthz`,
        method: 'GET',
        ...params,
      }),
  }
  api = {
    /**
     * No description
     *
     * @tags Sources
     * @name SourcesList
     * @summary Список источников
     * @request GET:/api/sources
     */
    sourcesList: (params: RequestParams = {}) =>
      this.request<SourcesList, Error>({
        path: `/api/sources`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sources
     * @name SourcesCreate
     * @summary Добавить источник
     * @request POST:/api/sources
     */
    sourcesCreate: (data: SourceCreate, params: RequestParams = {}) =>
      this.request<Source, Error>({
        path: `/api/sources`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sources
     * @name SourcesDelete
     * @summary Удалить источник
     * @request DELETE:/api/sources/{id}
     */
    sourcesDelete: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "deleted" */
          status?: string
          /** @example 1 */
          id?: number
        },
        Error
      >({
        path: `/api/sources/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesList
     * @summary Список новостей
     * @request GET:/api/articles
     */
    articlesList: (
      query?: {
        /**
         * Фильтр по источнику
         * @min 1
         */
        source_id?: number
        /**
         * Поиск по заголовку/описанию (ILIKE)
         * @maxLength 200
         */
        q?: string
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        limit?: number
        /**
         * @min 0
         * @default 0
         */
        offset?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<ArticlesList, Error>({
        path: `/api/articles`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesDetail
     * @summary Получить новость по id
     * @request GET:/api/articles/{id}
     */
    articlesDetail: (id: number, params: RequestParams = {}) =>
      this.request<Article, Error>({
        path: `/api/articles/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает список медиа (assets) для статьи. Локальные файлы (картинки/документы) отдаются через `/media/...`. Видео — внешние ссылки/встраиваемый плеер VK. Видео из Telegram скачиваются.
     *
     * @tags Articles
     * @name ArticlesMediaList
     * @summary Медиа-данные статьи (локальные файлы и данные о видео)
     * @request GET:/api/articles/{id}/media
     */
    articlesMediaList: (id: number, params: RequestParams = {}) =>
      this.request<ArticleAssetsResponse, Error>({
        path: `/api/articles/${id}/media`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  }
  media = {
    /**
     * No description
     *
     * @tags Media
     * @name MediaDetail
     * @summary Выдача локальных медиафайлов
     * @request GET:/media/{path}
     */
    mediaDetail: (path: string, params: RequestParams = {}) =>
      this.request<File, Error>({
        path: `/media/${path}`,
        method: 'GET',
        ...params,
      }),
  }
}
