module.exports = () => ({
  openapi: '3.0.0',
  info: {
    title: 'Spreadsheeter',
    version: '1.0.0',
    description: '',
  },
  tags: [],
  paths: {
    '/sheetify': {
      post: {
        summary: 'Turn the JSON payload into a spreadsheet',
        requestBody: {
          description:
            'For best results, submit an Array of Arrays of Strings.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
              },
            },
          },
        },
        responses: { 200: { description: 'OK' } },
      },
    },
  },
  components: {},
});
