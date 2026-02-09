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
  type: string
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
  /** ID родительской статьи (TG) */
  parent_article_id: number
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

export interface ArticleChildrenResponse {
  /** ID родительской статьи */
  id: number
  total: number
  limit: number
  offset: number
  items: Article[]
}

export interface ArticleParentResponse {
  /** ID запрошенной статьи */
  id: number
  /** Родительская статья (null, если нет) */
  parent: Article | null
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

export interface TgAuthUser {
  /** @example 123456789 */
  id?: number
  /** @example "Ivan" */
  first_name?: string | null
  /** @example "Petrov" */
  last_name?: string | null
  /** @example "ivanpetrov" */
  username?: string | null
  /** @example "+79990000000" */
  phone?: string | null
}

export interface TgAuthStatus {
  /** @example "pending" */
  status?: TgAuthStatusStatusEnum
  /**
   * Ссылка tg://login?token=..., из которой фронт строит QR
   * @example "tg://login?token=AAEAAABb..."
   */
  qr_url?: string | null
  /**
   * RFC3339 время истечения QR-токена (UTC)
   * @format date-time
   * @example "2025-10-27T12:00:00Z"
   */
  expires_at?: string | null
  /** @example "bad_password" */
  error?: string | null
  user?: TgAuthUser
}

export interface AuthRegisterRequest {
  /**
   * @format email
   * @example "user@example.com"
   */
  email: string
  /** @example "user123" */
  login: string
  /**
   * @format password
   * @minLength 8
   */
  password: string
  /** @format password */
  password_confirm: string
}

export interface AuthRegisterPendingResponse {
  status: AuthRegisterPendingResponseStatusEnum
  /** @format email */
  email: string
  login: string
  /** @example 900 */
  code_ttl_sec: number
  /** @example 1 */
  send_count: number
}

export interface AuthRegisterConfirmRequest {
  /** @format email */
  email: string
  /** @example "123456" */
  code: string
}

export interface AuthRegisterConfirmResponse {
  status: AuthRegisterConfirmResponseStatusEnum
}

export interface AuthRegisterResendRequest {
  /** @format email */
  email: string
}

export interface AuthRegisterResendResponse {
  status: AuthRegisterResendResponseStatusEnum
  send_count: number
  code_ttl_sec: number
}

export interface AuthRegisterStatusResponse {
  status: AuthRegisterStatusResponseStatusEnum
  code?: {
    send_count?: number
    input_count?: number
    ttl_sec?: number
  } | null
}

export interface AuthLoginRequest {
  /** Либо login, либо email */
  login?: string
  /**
   * Либо email, либо login
   * @format email
   */
  email?: string
  /** @format password */
  password: string
  /** @default false */
  remember?: boolean
}

export interface AuthLoginResponse {
  /** Opaque bearer token */
  access_token: string
  /** @example "bearer" */
  token_type: string
  /**
   * @format date-time
   * @example "2025-10-30T09:00:00Z"
   */
  expires_at: string
}

export interface WhoAmIResponse {
  id: number
  /** @format email */
  email: string
  login: string
  is_active: boolean
  /** @format date-time */
  email_confirmed_at?: string | null
  /** @format date-time */
  last_login_at?: string | null
  last_login_ip?: string | null
}

export interface LogoutResponse {
  status: LogoutResponseStatusEnum
}

export interface PasswordSendCodeRequest {
  /** @format email */
  email: string
}

export interface PasswordSendCodeResponse {
  status: PasswordSendCodeResponseStatusEnum
  code_ttl_sec: number
}

export interface PasswordResetRequest {
  /** @format email */
  email: string
  /** @example "123456" */
  code: string
  /**
   * @format password
   * @minLength 8
   */
  new_password: string
  /** @format password */
  new_password_confirm: string
}

export interface PasswordResetResponse {
  status: PasswordResetResponseStatusEnum
}

export interface Setting {
  id: number
  /**
   * Код настройки (уникальный)
   * @example "tg.enabled"
   */
  code: string
  /**
   * Строковое значение настройки
   * @example "1"
   */
  value: string
}

export type SettingsList = Setting[]

export interface SettingUpdate {
  /**
   * @minLength 1
   * @example "tg.enabled"
   */
  code: string
  /** @example "1" */
  value: string
}

export interface SettingCodesResponse {
  codes: string[]
}

export interface SettingOptions {
  code: string
  type: SettingOptionsTypeEnum
  default: number | boolean | string
  options?: (number | boolean | string)[]
  allow_custom?: boolean
  min?: number
  max?: number
  zero_is_unlimited?: boolean
}

export interface SettingOptionsList {
  items: SettingOptions[]
}

export interface ArticleStopWordsResponse {
  /** ID статьи */
  id: number
  items: StopWord[]
}

export interface ArticleKeyWordsResponse {
  /** ID статьи */
  id: number
  items: KeyWord[]
}

export interface ArticleCleanupRequest {
  /** Дата (RFC3339 или YYYY-MM-DD). Удаляются новости до даты включительно. */
  date_to: string
  /**
   * Если true, удаление не выполняется, возвращается только статистика.
   * @default false
   */
  dry_run?: boolean
}

export interface ArticleCleanupResponse {
  /**
   * Нормализованная дата отсечения.
   * @format date-time
   */
  date_to: string
  dry_run: boolean
  total: number
  deleted: number
  remaining: number
}

export interface StopCategory {
  id: number
  /** Символьный код (slug), генерируется автоматически */
  code: string
  /** Название категории */
  title: string
}

export type StopCategoriesList = StopCategory[]

export interface StopCategoryUpsertRequest {
  /**
   * Если передан — будет выполнено обновление записи
   * @min 1
   */
  id?: number
  /**
   * Название категории
   * @minLength 1
   */
  title: string
}

export interface Rubric {
  id: number
  /** Символьный код (slug), генерируется автоматически */
  code: string
  /** Название рубрики */
  title: string
}

export type RubricsList = Rubric[]

export interface RubricUpsertRequest {
  /**
   * Если передан — будет выполнено обновление записи
   * @min 1
   */
  id?: number
  /**
   * Название рубрики
   * @minLength 1
   */
  title: string
}

export interface StopWord {
  id: number
  /** Символьный код слова, генерируется из value */
  code: string
  /** Текст стоп-слова */
  value: string
  /** ID категории стоп-слова */
  category_id: number
}

export type StopWordsList = StopWord[]

export interface StopWordUpsertRequest {
  /**
   * Если передан — будет выполнено обновление записи
   * @min 1
   */
  id?: number
  /**
   * Текст стоп-слова
   * @minLength 1
   */
  value: string
  /**
   * ID категории, к которой относится стоп-слово
   * @min 1
   */
  category_id: number
}

export interface KeyWord {
  id: number
  /** Символьный код слова, генерируется из value */
  code: string
  /** Текст ключевого слова */
  value: string
  /** ID рубрики, к которой относится ключевое слово */
  rubric_id: number
}

export type KeyWordsList = KeyWord[]

export interface KeyWordUpsertRequest {
  /**
   * Если передан — будет выполнено обновление записи
   * @min 1
   */
  id?: number
  /**
   * Текст ключевого слова
   * @minLength 1
   */
  value: string
  /**
   * ID рубрики
   * @min 1
   */
  rubric_id: number
}

export interface ArticleStat {
  /** ID новости (статьи) */
  entity_id: number
  /**
   * Количество уникальных стоп-слов, найденных в статье
   * @min 0
   */
  stop_words_count: number
  /**
   * Количество уникальных ключевых слов, найденных в статье
   * @min 0
   */
  key_words_count: number
  /** Рубрика с наибольшим количеством ключевых слов */
  rubric_id?: number | null
  /** Категория с наибольшим количеством стоп-слов */
  stop_category_id?: number | null
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

/** @example "pending" */
export enum TgAuthStatusStatusEnum {
  Unauthorized = 'unauthorized',
  Pending = 'pending',
  PasswordRequired = 'password_required',
  Authorized = 'authorized',
  Expired = 'expired',
  Error = 'error',
}

export enum AuthRegisterPendingResponseStatusEnum {
  Pending = 'pending',
}

export enum AuthRegisterConfirmResponseStatusEnum {
  Confirmed = 'confirmed',
  AlreadyConfirmed = 'already_confirmed',
}

export enum AuthRegisterResendResponseStatusEnum {
  Resent = 'resent',
  AlreadyConfirmed = 'already_confirmed',
}

export enum AuthRegisterStatusResponseStatusEnum {
  Pending = 'pending',
  Confirmed = 'confirmed',
}

export enum LogoutResponseStatusEnum {
  Revoked = 'revoked',
  AlreadyRevoked = 'already_revoked',
}

export enum PasswordSendCodeResponseStatusEnum {
  Sent = 'sent',
}

export enum PasswordResetResponseStatusEnum {
  PasswordChanged = 'password_changed',
}

export enum SettingOptionsTypeEnum {
  Int = 'int',
  Bool = 'bool',
  String = 'string',
}

/**
 * Направление сортировки по `published_at`, затем по `id`. По умолчанию убывание (`desc`).
 * @default "desc"
 */
export enum ArticlesListParamsOrderEnum {
  Asc = 'asc',
  Desc = 'desc',
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

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  'data' | 'params' | 'url' | 'responseType'
> {
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

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  'data' | 'cancelToken'
> {
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
     * @summary Список статей
     * @request GET:/api/articles
     */
    articlesList: (
      query?: {
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
        /** Фильтр по дате публикации (поле `published_at`) с этой даты/времени включительно. Поддерживаются форматы RFC 3339: `YYYY-MM-DDTHH:MM:SSZ|±HH:MM` и дата без времени `YYYY-MM-DD`. Если передана только дата, интерпретируется как начало суток 00:00:00 в UTC. */
        date_from?: string
        /** Верхняя граница фильтра по `published_at` включительно. При дате без времени `YYYY-MM-DD` берётся конец суток 23:59:59.999999 (UTC). */
        date_to?: string
        /**
         * Направление сортировки по `published_at`, затем по `id`. По умолчанию убывание (`desc`).
         * @default "desc"
         */
        order?: ArticlesListParamsOrderEnum
        /**
         * Фильтрует статьи по rubric id из статистики статьи (ArticleStat.rubric_id).
         * @min 1
         */
        rubric_id?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<ArticlesList, any>({
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
     * @name ArticlesExportList
     * @summary Экспорт статистики статей в Excel
     * @request GET:/api/articles/export
     */
    articlesExportList: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/articles/export`,
        method: 'GET',
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

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesCleanupCreate
     * @summary Очистка новостей до даты
     * @request POST:/api/articles/cleanup
     */
    articlesCleanupCreate: (
      data: ArticleCleanupRequest,
      params: RequestParams = {},
    ) =>
      this.request<ArticleCleanupResponse, Error>({
        path: `/api/articles/cleanup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesChildrenList
     * @summary Дочерние статьи (фото, видео)
     * @request GET:/api/articles/{id}/children
     */
    articlesChildrenList: (
      id: number,
      query?: {
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
      this.request<ArticleChildrenResponse, Error>({
        path: `/api/articles/${id}/children`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesParentList
     * @summary Родительская статья
     * @request GET:/api/articles/{id}/parent
     */
    articlesParentList: (id: number, params: RequestParams = {}) =>
      this.request<ArticleParentResponse, Error>({
        path: `/api/articles/${id}/parent`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TelegramAuth
     * @name TgAuthStatusList
     * @summary Получить текущий статус авторизации в Telegram
     * @request GET:/api/tg/auth/status
     */
    tgAuthStatusList: (params: RequestParams = {}) =>
      this.request<TgAuthStatus, Error>({
        path: `/api/tg/auth/status`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TelegramAuth
     * @name TgAuthQrCreate
     * @summary Начать/перегенерировать QR-логин
     * @request POST:/api/tg/auth/qr
     */
    tgAuthQrCreate: (
      data?: {
        /**
         * Создать новый QR, даже если старый ещё не истёк
         * @default false
         */
        force?: boolean
      },
      params: RequestParams = {},
    ) =>
      this.request<TgAuthStatus, Error>({
        path: `/api/tg/auth/qr`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TelegramAuth
     * @name TgAuth2FaCreate
     * @summary Завершить авторизацию — отправить 2FA-пароль
     * @request POST:/api/tg/auth/2fa
     */
    tgAuth2FaCreate: (
      data: {
        /** @example "mysupersecret" */
        password: string
      },
      params: RequestParams = {},
    ) =>
      this.request<TgAuthStatus, Error>({
        path: `/api/tg/auth/2fa`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TelegramAuth
     * @name TgAuthLogoutCreate
     * @summary Выйти из Telegram-аккаунта и сбросить сессию
     * @request POST:/api/tg/auth/logout
     */
    tgAuthLogoutCreate: (params: RequestParams = {}) =>
      this.request<TgAuthStatus, Error>({
        path: `/api/tg/auth/logout`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthRegister
     * @summary Регистрация пользователя и первичная отправка кода подтверждения
     * @request POST:/api/auth/register
     */
    authRegister: (data: AuthRegisterRequest, params: RequestParams = {}) =>
      this.request<AuthRegisterPendingResponse, Error>({
        path: `/api/auth/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthRegisterResend
     * @summary Переотправка кода подтверждения e-mail
     * @request POST:/api/auth/register/resend
     */
    authRegisterResend: (
      data: AuthRegisterResendRequest,
      params: RequestParams = {},
    ) =>
      this.request<AuthRegisterResendResponse, Error>({
        path: `/api/auth/register/resend`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthRegisterConfirm
     * @summary Подтверждение e-mail кодом
     * @request POST:/api/auth/register/confirm
     */
    authRegisterConfirm: (
      data: AuthRegisterConfirmRequest,
      params: RequestParams = {},
    ) =>
      this.request<AuthRegisterConfirmResponse, Error>({
        path: `/api/auth/register/confirm`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthRegisterStatus
     * @summary Статус подтверждения регистрации
     * @request GET:/api/auth/register/status
     */
    authRegisterStatus: (
      query: {
        /** @format email */
        email: string
      },
      params: RequestParams = {},
    ) =>
      this.request<AuthRegisterStatusResponse, Error>({
        path: `/api/auth/register/status`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthLogin
     * @summary Вход по login/email и паролю (серверные сессии)
     * @request POST:/api/auth/login
     */
    authLogin: (data: AuthLoginRequest, params: RequestParams = {}) =>
      this.request<AuthLoginResponse, Error>({
        path: `/api/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthLogout
     * @summary Выход (ревокация текущей сессии)
     * @request POST:/api/auth/logout
     * @secure
     */
    authLogout: (params: RequestParams = {}) =>
      this.request<LogoutResponse, Error>({
        path: `/api/auth/logout`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthWhoami
     * @summary Текущий пользователь по bearer-токену
     * @request GET:/api/auth/whoami
     * @secure
     */
    authWhoami: (params: RequestParams = {}) =>
      this.request<WhoAmIResponse, Error>({
        path: `/api/auth/whoami`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthPasswordSendCode
     * @summary Отправка/переотправка кода на сброс пароля
     * @request POST:/api/auth/password/send-code
     */
    authPasswordSendCode: (
      data: PasswordSendCodeRequest,
      params: RequestParams = {},
    ) =>
      this.request<PasswordSendCodeResponse, Error>({
        path: `/api/auth/password/send-code`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authorization
     * @name AuthPasswordReset
     * @summary Подтверждение кода и установка нового пароля
     * @request POST:/api/auth/password/reset
     */
    authPasswordReset: (
      data: PasswordResetRequest,
      params: RequestParams = {},
    ) =>
      this.request<PasswordResetResponse, Error>({
        path: `/api/auth/password/reset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Возвращает значения динамических общих настроек сервиса. Если `codes` не указан — возвращаются все известные коды.
     *
     * @tags Settings
     * @name SettingsList
     * @summary Список текущих значений настроек
     * @request GET:/api/settings
     */
    settingsList: (
      query?: {
        /**
         * Список кодов настроек через запятую. Если не указан — возвращаются все настройки.
         * @example "poll_interval,media_keep"
         */
        codes?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<SettingsList, Error>({
        path: `/api/settings`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Обновляет значение существующей настройки по `code`. Создание новых настроек через этот роут запрещено.
     *
     * @tags Settings
     * @name SettingsCreate
     * @summary Обновить значение настройки
     * @request POST:/api/settings
     */
    settingsCreate: (data: SettingUpdate, params: RequestParams = {}) =>
      this.request<Setting, Error>({
        path: `/api/settings`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name SettingsCodesList
     * @summary Список актуальных кодов настроек
     * @request GET:/api/settings/codes
     */
    settingsCodesList: (params: RequestParams = {}) =>
      this.request<SettingCodesResponse, Error>({
        path: `/api/settings/codes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Если передан `code`, возвращает метаданные одной настройки. Если `code` не указан, возвращает список по всем актуальным кодам.
     *
     * @tags Settings
     * @name SettingsOptionsList
     * @summary Варианты выбора для настроек
     * @request GET:/api/settings/options
     */
    settingsOptionsList: (
      query?: {
        /**
         * Код настройки для получения вариантов выбора.
         * @example "poll_interval"
         */
        code?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<SettingOptions | SettingOptionsList, Error>({
        path: `/api/settings/options`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags StopWords
     * @name StopCategoriesList
     * @summary Список категорий стоп-слов
     * @request GET:/api/stop-categories
     */
    stopCategoriesList: (params: RequestParams = {}) =>
      this.request<StopCategoriesList, Error>({
        path: `/api/stop-categories`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Если передан `id` — обновляет существующую категорию. Если `id` не передан — создаёт новую категорию. Символьный код `code` генерируется автоматически из `title`.
     *
     * @tags StopWords
     * @name StopCategoriesCreate
     * @summary Создать или обновить категорию стоп-слов
     * @request POST:/api/stop-categories
     */
    stopCategoriesCreate: (
      data: StopCategoryUpsertRequest,
      params: RequestParams = {},
    ) =>
      this.request<StopCategory, Error>({
        path: `/api/stop-categories`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags StopWords
     * @name StopCategoriesDelete
     * @summary Удалить категорию стоп-слов
     * @request DELETE:/api/stop-categories/{id}
     */
    stopCategoriesDelete: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "deleted" */
          status?: string
          /** @example 1 */
          id?: number
        },
        Error
      >({
        path: `/api/stop-categories/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags KeyWords
     * @name RubricsList
     * @summary Список рубрик
     * @request GET:/api/rubrics
     */
    rubricsList: (params: RequestParams = {}) =>
      this.request<RubricsList, Error>({
        path: `/api/rubrics`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Если передан `id` — обновляет существующую рубрику. Если `id` не передан — создаёт новую рубрику. Символьный код `code` генерируется автоматически из `title`.
     *
     * @tags KeyWords
     * @name RubricsCreate
     * @summary Создать или обновить рубрику
     * @request POST:/api/rubrics
     */
    rubricsCreate: (data: RubricUpsertRequest, params: RequestParams = {}) =>
      this.request<Rubric, Error>({
        path: `/api/rubrics`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags KeyWords
     * @name RubricsDelete
     * @summary Удалить рубрику
     * @request DELETE:/api/rubrics/{id}
     */
    rubricsDelete: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "deleted" */
          status?: string
          /** @example 1 */
          id?: number
        },
        Error
      >({
        path: `/api/rubrics/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags StopWords
     * @name StopWordsList
     * @summary Список стоп-слов
     * @request GET:/api/stop-words
     */
    stopWordsList: (params: RequestParams = {}) =>
      this.request<StopWordsList, Error>({
        path: `/api/stop-words`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Если передан `id` — обновляет существующее стоп-слово. Если `id` не передан — создаёт новое. Символьный код `code` генерируется автоматически из `value`.
     *
     * @tags StopWords
     * @name StopWordsCreate
     * @summary Создать или обновить стоп-слово
     * @request POST:/api/stop-words
     */
    stopWordsCreate: (
      data: StopWordUpsertRequest,
      params: RequestParams = {},
    ) =>
      this.request<StopWord, Error>({
        path: `/api/stop-words`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags StopWords
     * @name StopWordsDelete
     * @summary Удалить стоп-слово
     * @request DELETE:/api/stop-words/{id}
     */
    stopWordsDelete: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "deleted" */
          status?: string
          /** @example 1 */
          id?: number
        },
        Error
      >({
        path: `/api/stop-words/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags KeyWords
     * @name KeyWordsList
     * @summary Список ключевых слов
     * @request GET:/api/key-words
     */
    keyWordsList: (params: RequestParams = {}) =>
      this.request<KeyWordsList, Error>({
        path: `/api/key-words`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Если передан `id` — обновляет существующее ключевое слово. Если `id` не передан — создаёт новое. Символьный код `code` генерируется автоматически из `value`.
     *
     * @tags KeyWords
     * @name KeyWordsCreate
     * @summary Создать или обновить ключевое слово
     * @request POST:/api/key-words
     */
    keyWordsCreate: (data: KeyWordUpsertRequest, params: RequestParams = {}) =>
      this.request<KeyWord, Error>({
        path: `/api/key-words`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags KeyWords
     * @name KeyWordsDelete
     * @summary Удалить ключевое слово
     * @request DELETE:/api/key-words/{id}
     */
    keyWordsDelete: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /** @example "deleted" */
          status?: string
          /** @example 1 */
          id?: number
        },
        Error
      >({
        path: `/api/key-words/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesStatsList
     * @summary Статистика по стоп- и ключевым словам для статьи
     * @request GET:/api/articles/{id}/stats
     */
    articlesStatsList: (id: number, params: RequestParams = {}) =>
      this.request<ArticleStat, Error>({
        path: `/api/articles/${id}/stats`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags StopWords
     * @name ArticlesStopWordsList
     * @summary Стоп-слова, найденные в статье
     * @request GET:/api/articles/{id}/stop-words
     */
    articlesStopWordsList: (id: number, params: RequestParams = {}) =>
      this.request<ArticleStopWordsResponse, Error>({
        path: `/api/articles/${id}/stop-words`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags KeyWords
     * @name ArticlesKeyWordsList
     * @summary Ключевые слова, найденные в статье
     * @request GET:/api/articles/{id}/key-words
     */
    articlesKeyWordsList: (id: number, params: RequestParams = {}) =>
      this.request<ArticleKeyWordsResponse, Error>({
        path: `/api/articles/${id}/key-words`,
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
