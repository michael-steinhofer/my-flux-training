import { defineField, defineType } from 'sanity'

export const aboutTeam = defineType({
  name: 'aboutTeam',
  title: 'About — Team',
  type: 'document',
  fields: [
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
  ],
  preview: {
    prepare() {
      return { title: 'Team' }
    },
  },
})
