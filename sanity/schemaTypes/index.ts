import type { SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { newsItem } from './newsItem'
import { testimonial } from './testimonial'
import { portfolioProject } from './portfolioProject'
import { siteSettings } from './siteSettings'
import { aboutHero } from './aboutHero'
import { aboutStory } from './aboutStory'
import { aboutValues } from './aboutValues'
import { aboutTeam } from './aboutTeam'
import { aboutProcess } from './aboutProcess'

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  newsItem,
  testimonial,
  portfolioProject,
  siteSettings,
  aboutHero,
  aboutStory,
  aboutValues,
  aboutTeam,
  aboutProcess,
]
