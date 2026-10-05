import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  access: { read: () => true, create: () => true },

  fields: [
    { name: 'isbn', type: 'text', required: true, unique: true, label: 'ISBN' },
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'author', type: 'text', required: true },
    { name: 'coverURL', type: 'text', label: 'Cover URL' },
    { name: 'publisher', type: 'text' },
    { name: 'publishDate', type: 'text' },
    { name: 'pages', type: 'number' },
    { name: 'description', type: 'textarea' },
  ],
}
