import { defineField, defineType } from 'sanity'

export const aboutStory = defineType({
  name: 'aboutStory',
  title: 'About — Story',
  type: 'document',
  fields: [
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      rows: 4,
      description: 'Paragraph inside the corner-bracket box.',
    }),
    defineField({
      name: 'statementLines',
      title: 'Statement Lines',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lines of the large statement (rendered alternating right/left). Each entry = one line.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Story' }
    },
  },
})
