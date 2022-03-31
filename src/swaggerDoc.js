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
  },
  components: {},
});
