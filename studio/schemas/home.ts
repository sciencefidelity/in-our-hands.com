export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown'
    },
    {
      name: 'featured',
      title: 'Featured Posts',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'post' }}],
      sortable: true,
      description: 'Maximum three items',
      validation: (Rule: any) => Rule.max(3)
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}