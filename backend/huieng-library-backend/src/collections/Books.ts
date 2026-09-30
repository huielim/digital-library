import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  access: { read: () => true },

  fields: [
    {name: 'isbn', type: 'text', required: true},
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'author', type: 'text', required: true },
    { name: 'cover', type: 'text', required: true },
  ],
}
