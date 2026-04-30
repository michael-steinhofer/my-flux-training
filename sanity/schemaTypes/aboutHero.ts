import { defineField, defineType } from 'sanity'

export const aboutHero = defineType({
  name: 'aboutHero',
  title: 'About — Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Small tag above the headline, e.g. "[ About H.Studio ]"',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Large overlay text, e.g. "Creative\nStudio."',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero' }
    },
  },
})
