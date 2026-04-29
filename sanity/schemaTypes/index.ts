import type { SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { newsItem } from './newsItem'
import { testimonial } from './testimonial'
import { portfolioProject } from './portfolioProject'
import { siteSettings } from './siteSettings'

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  newsItem,
  testimonial,
  portfolioProject,
  siteSettings,
]
