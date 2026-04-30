import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'my-flux-training',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .child(
                S.list()
                  .title('Homepage')
                  .items([
                    // Singleton — opens directly to the document
                    S.listItem()
                      .title('Site Settings')
                      .child(
                        S.document()
                          .schemaType('siteSettings')
                          .documentId('siteSettings')
                      ),
                    S.documentTypeListItem('service').title('Services'),
                    S.documentTypeListItem('portfolioProject').title('Portfolio Projects'),
                    S.documentTypeListItem('testimonial').title('Testimonials'),
                    S.documentTypeListItem('newsItem').title('News Items'),
                  ])
              ),
            S.listItem()
              .title('About Page')
              .child(
                S.list()
                  .title('About Page')
                  .items([
                    S.listItem()
                      .title('Hero')
                      .child(S.document().schemaType('aboutHero').documentId('aboutHero')),
                    S.listItem()
                      .title('Story')
                      .child(S.document().schemaType('aboutStory').documentId('aboutStory')),
                    S.listItem()
                      .title('Values')
                      .child(S.document().schemaType('aboutValues').documentId('aboutValues')),
                    S.listItem()
                      .title('Team')
                      .child(S.document().schemaType('aboutTeam').documentId('aboutTeam')),
                    S.listItem()
                      .title('Process')
                      .child(S.document().schemaType('aboutProcess').documentId('aboutProcess')),
                  ])
              ),
            // Add future pages here at this level, e.g.:
            // S.listItem().title('Services Page').child(...)
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
