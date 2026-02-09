export type SettingsCodes = 'poll_interval' | 'media_keep' | 'media_max_size_mb'

export type SettingsCodeKey = 'POLL_INTERVAL' | 'MEDIA_KEEP' | 'MEDIA_MAX_SIZE'

export const SETTINGS_CODES: Record<SettingsCodeKey, SettingsCodes> = {
  POLL_INTERVAL: 'poll_interval',
  MEDIA_KEEP: 'media_keep',
  MEDIA_MAX_SIZE: 'media_max_size_mb',
}
