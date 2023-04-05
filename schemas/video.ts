export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "number",
    },
    {
      name: "placeholder",
      title: "Placeholder",
      type: "image",
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    },
  ]
}
