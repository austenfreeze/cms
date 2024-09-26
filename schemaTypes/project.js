export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A description that provides context for the entire project.',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'gallery',  // Reference the gallery schema for adding media to the project
    },
    {
      name: 'subProjects',
      title: 'Sub-Projects',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'project' }] }  // Allows referencing other projects as sub-projects
      ],
      description: 'Add sub-projects that are part of this larger project.',
    },
  ],
}
