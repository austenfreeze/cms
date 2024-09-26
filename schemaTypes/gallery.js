export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'description',
              title: 'Description/Definition',
              type: 'text',
              description: 'Add an individual description or definition for this image.',
            },
            {
              name: 'customFileName',
              title: 'Custom File Name',
              type: 'string',
              description: 'Rename the file after uploading.',
              options: {
                isHighlighted: true, // Show the field in the image input UI.
              },
            },
          ],
        },
      ],
      options: {
        layout: 'grid', // This will display images in a grid layout in the CMS.
      },
    },
    {
      name: 'projectDescription',
      title: 'Overall Project Description',
      type: 'text',
      description: 'Add a description that covers the entire gallery or project.',
    },
  ],
}