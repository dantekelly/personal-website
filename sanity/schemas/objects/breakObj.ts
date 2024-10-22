export default {
  name: "breakObj",
  type: "object",
  title: "Break",
  fields: [
    {
      name: "style",
      type: "string",
      title: "Break style",
      options: {
        list: [{ title: "Line break", value: "lineBreak" }],
      },
    },
  ],
};
