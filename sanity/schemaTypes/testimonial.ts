import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'width', title: 'Display Width (px)', type: 'number' }),
        defineField({ name: 'height', title: 'Display Height (px)', type: 'number' }),
      ],
    }),
    defineField({
      name: 'rotation',
      title: 'Card Rotation (CSS)',
      type: 'string',
      description: 'e.g. rotate-[2.9deg]',
    }),
    defineField({
      name: 'left',
      title: 'Left Position (%)',
      type: 'string',
      description: 'e.g. 46.9%',
    }),
    defineField({
      name: 'top',
      title: 'Top Position (px)',
      type: 'number',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'quote', media: 'logo' },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle?.slice(0, 60) + '…', media }
    },
  },
})
