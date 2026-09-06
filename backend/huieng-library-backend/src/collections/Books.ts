import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  access: { read: () => true },

  fields: [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'author', type: 'text', required: true },
    { name: 'description', type: 'text' },
    { name: 'cover', type: 'text', required: true },
    { name: 'publishedDate', type: 'date', required: true },
    { name: 'read', type: 'checkbox' },
  ],
}
