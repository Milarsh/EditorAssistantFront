import type { Source } from '@/shared/api'

export const MOCK_SOURCES: Source[] = [
  {
    id: 101,
    name: 'РИА Новости',
    rss_url: 'https://ria.ru/export/rss2/index.xml',
    enabled: true,
    created_at: '2024-01-15 09:00:00',
  },
  {
    id: 102,
    name: 'Meduza',
    rss_url: 'https://meduza.io/rss/all',
    enabled: true,
    created_at: '2024-02-10 12:30:00',
  },
  {
    id: 103,
    name: 'VC.ru',
    rss_url: 'https://vc.ru/rss',
    enabled: true,
    created_at: '2024-03-05 07:15:00',
  },
  {
    id: 104,
    name: 'Habr',
    rss_url: 'https://habr.com/ru/rss/all/all/?fl=ru',
    enabled: true,
    created_at: '2024-01-20 10:45:00',
  },
  {
    id: 105,
    name: 'Financial Times',
    rss_url: 'https://www.ft.com/?format=rss',
    enabled: true,
    created_at: '2024-04-01 08:00:00',
  },
  {
    id: 106,
    name: 'TechCrunch',
    rss_url: 'http://feeds.feedburner.com/TechCrunch/',
    enabled: true,
    created_at: '2024-05-15 14:20:00',
  },
  {
    id: 107,
    name: 'Edutopia',
    rss_url: 'https://www.edutopia.org/feed',
    enabled: true,
    created_at: '2024-06-01 11:30:00',
  },
  {
    id: 108,
    name: 'Krebs on Security',
    rss_url: 'https://krebsonsecurity.com/feed/',
    enabled: true,
    created_at: '2024-07-10 09:05:00',
  },
]
