module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // In the future, importing tsconfig.js will be implemented perhaps:
        // https://github.com/tleunen/babel-plugin-module-resolver/issues/336
        root: ['src'],
      },
    ],
  ],
};
