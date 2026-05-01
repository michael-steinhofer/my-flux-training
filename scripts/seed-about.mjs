/**
 * Seeds the About page singleton documents in Sanity with initial content.
 * Uses createOrReplace so it's safe to run multiple times.
 *
 * Usage: node scripts/seed-about.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const env = Object.fromEntries(
  readFileSync(resolve(__dirname, '../.env.local'), 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('#'))
    .map(l => l.split('=').map(s => s.trim()))
)

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: env.SANITY_API_WRITE_TOKEN || env.SANITY_API_READ_TOKEN,
  useCdn: false,
})

const docs = [
  {
    _id: 'aboutHero',
    _type: 'aboutHero',
    label: '[ About H.Studio ]',
    headline: 'Creative\nStudio.',
  },
  {
    _id: 'aboutStory',
    _type: 'aboutStory',
    blurb:
      'H.Studio is a full-service creative studio founded by Michael Steinhofer in Chicago. We partner with brands, founders, and teams who believe that design is one of their most powerful competitive advantages — from brand identity to interactive web experiences, we bring ideas to life with intention, craft, and a relentless focus on impact.',
    statementLines: ['We build brands,', 'experiences', '& products', 'that leave a mark.'],
  },
  {
    _id: 'aboutValues',
    _type: 'aboutValues',
    values: [
      {
        _type: 'value',
        _key: 'craft',
        title: 'Craft',
        body: 'We obsess over every detail — from the weight of a typeface to the timing of a hover state. Good work is never accidental.',
      },
      {
        _type: 'value',
        _key: 'clarity',
        title: 'Clarity',
        body: "Great design communicates before anyone reads a word. We strip away everything that doesn't serve the message.",
      },
      {
        _type: 'value',
        _key: 'impact',
        title: 'Impact',
        body: 'We measure success by what changes after we ship. Beautiful work that also moves the needle is the only kind worth making.',
      },
    ],
  },
  {
    _id: 'aboutTeam',
    _type: 'aboutTeam',
    teamMembers: [
      {
        _type: 'teamMember',
        _key: 'michael',
        name: 'Michael Steinhofer',
        role: 'Creative Director & Founder',
        bio: 'Michael is a Chicago-based creative director with over a decade of experience building brands and digital products across fashion, technology, and culture. He founded H.Studio to bring together visual design, interaction design, and engineering under one roof — with quality as the non-negotiable constant.',
      },
    ],
  },
  {
    _id: 'aboutProcess',
    _type: 'aboutProcess',
    processSteps: [
      {
        _type: 'processStep',
        _key: 'discovery',
        num: '01',
        name: 'Discovery',
        desc: 'We start by listening. Understanding your goals, your audience, and your competitive landscape before a single pixel is placed.',
      },
      {
        _type: 'processStep',
        _key: 'strategy',
        num: '02',
        name: 'Strategy',
        desc: 'Every project begins with a clear plan. We map the solution, define success metrics, and align on direction before execution.',
      },
      {
        _type: 'processStep',
        _key: 'design',
        num: '03',
        name: 'Design & Build',
        desc: 'Ideas become reality. We craft beautiful, functional experiences — iterating closely with you at every milestone.',
      },
      {
        _type: 'processStep',
        _key: 'launch',
        num: '04',
        name: 'Launch & Evolve',
        desc: "We don't disappear after delivery. We monitor, measure, and continue to refine long after the work goes live.",
      },
    ],
  },
]

const transaction = client.transaction()
for (const doc of docs) {
  transaction.createOrReplace(doc)
}

try {
  await transaction.commit()
  console.log('✅ About page documents seeded successfully.')
} catch (err) {
  console.error('❌ Failed to seed documents:', err.message)
  process.exit(1)
}
