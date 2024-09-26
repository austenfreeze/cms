// /cms/schemaTypes/cmspost.js
export default {
    {
      name: 'coverphoto',
      title: 'Cover Photo',
      type: 'image',
      options: { hotspot: true },
    },
  name: 'Upload',
  title: 'Upload',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Link',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'gallery' },
        { type: 'videoEmbed' },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }], // Or create a separate tag schema for more control
    },
  ],
};