export default {
  name: 'cmsPage',
  title: 'CMS Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A general description for your CMS landing page.',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'project' }] },
      ],
      description: 'Select the projects to display on your CMS page.',
    },
  ],
}