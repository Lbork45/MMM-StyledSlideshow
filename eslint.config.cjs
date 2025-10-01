module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        Module: true,
        Log: true,
        Notification: true,
        __dirname: true,
        require: true,
        module: true,
        console: true,
        setTimeout: true,
        setInterval: true,
        document: true
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error'
    }
  }
];