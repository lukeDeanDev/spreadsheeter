module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  rules: {
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { multiline: true, consistent: true },
        ImportDeclaration: { multiline: true, consistent: true },
        ExportDeclaration: { multiline: true, consistent: true },
      },
    ],
    'implicit-arrow-linebreak': 'off', // This one conflicts with prettier too much
    'no-console': 'off',
  },
};
