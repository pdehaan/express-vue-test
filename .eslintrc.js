module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended'
  ],
  plugins: [
    "vue"
  ],
  overrides: [
    {
      files: ['*.js', 'controllers/*.js'],
      env: {
        es6: true,
        node: true
      }
    }
  ]
};
