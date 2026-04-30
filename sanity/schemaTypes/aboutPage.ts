import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [

    // ─── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: 'heroLabel',
      title: 'Hero Label',
      type: 'string',
      description: 'Small tag above the headline, e.g. "[ About H.Studio ]"',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'Large overlay headline, e.g. "Creative\nStudio."',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // ─── Story ─────────────────────────────────────────────────────────────
    defineField({
      name: 'storyBlurb',
      title: 'Story Blurb',
      type: 'text',
      rows: 4,
      description: 'Paragraph inside the corner-bracket box.',
    }),
    defineField({
      name: 'statementLines',
      title: 'Statement Lines',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lines of the large statement (alternating right/left). Each line is one entry.',
    }),

    // ─── Values ────────────────────────────────────────────────────────────
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'value',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),

    // ─── Team ──────────────────────────────────────────────────────────────
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role / Title', type: 'string' }),
            defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
          preview: { select: { title: 'name', media: 'photo' } },
        },
      ],
    }),

    // ─── Full-bleed photo ──────────────────────────────────────────────────
    defineField({
      name: 'fullBleedPhoto',
      title: 'Full-Bleed Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    // ─── Process ───────────────────────────────────────────────────────────
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'processStep',
          fields: [
            defineField({ name: 'num', title: 'Step Number', type: 'string', description: 'e.g. "01"' }),
            defineField({ name: 'name', title: 'Step Name', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'name', subtitle: 'num' } },
        },
      ],
    }),

  ],
  preview: {
    prepare() {
      return { title: 'About Page' }
    },
  },
})
