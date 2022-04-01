module.exports = () => ({
  openapi: '3.0.0',
  info: {
    title: 'Spreadsheeter',
    version: '1.0.0',
    description: '',
  },
  tags: [],
  paths: {
    '/hello': {
      get: {
        summary: 'says hello',
        responses: { 200: { description: 'OK' } },
      },
    },
    '/echo': {
      post: {
        summary: 'echo back the JSON payload',
        requestBody: {
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
    '/sheetify': {
      post: {
        summary: 'Turn the JSON payload into a spreadsheet',
        requestBody: {
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
