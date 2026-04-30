import { defineField, defineType } from 'sanity'

export const aboutProcess = defineType({
  name: 'aboutProcess',
  title: 'About — Process',
  type: 'document',
  fields: [
    defineField({
      name: 'fullBleedPhoto',
      title: 'Full-Bleed Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Large photo displayed between the Team and Process sections.',
    }),
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
      return { title: 'Process' }
    },
  },
})
