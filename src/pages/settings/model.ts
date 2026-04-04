export type SettingsCodes =
  | 'poll_interval'
  | 'media_keep'
  | 'media_max_size_mb'
  | 'social_stats_interval'
  | 'use_ml_news_analysis'

export type SettingsCodeKey =
  | 'POLL_INTERVAL'
  | 'MEDIA_KEEP'
  | 'MEDIA_MAX_SIZE'
  | 'SOCIAL_STATS_INTERVAL'
  | 'USE_ML_NEWS_ANALYSIS'

export const SETTINGS_CODES: Record<SettingsCodeKey, SettingsCodes> = {
  POLL_INTERVAL: 'poll_interval',
  MEDIA_KEEP: 'media_keep',
  MEDIA_MAX_SIZE: 'media_max_size_mb',
  SOCIAL_STATS_INTERVAL: 'social_stats_interval',
  USE_ML_NEWS_ANALYSIS: 'use_ml_news_analysis',
}
