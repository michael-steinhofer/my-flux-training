import { defineField, defineType } from 'sanity'

export const aboutValues = defineType({
  name: 'aboutValues',
  title: 'About — Values',
  type: 'document',
  fields: [
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
  ],
  preview: {
    prepare() {
      return { title: 'Values' }
    },
  },
})
