export default {
  name: 'videoEmbed',
  title: 'Video Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
  ],
}