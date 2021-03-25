const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: path.resolve(__dirname, './src/client'),
  },
  resolve: {
    extensions: ['.wasm', '.ts', '.js'],
  },
  module: {
    // defaultRules: [
    //     {
    //         type: "javascript/auto",
    //         resolve: {}
    //     },
    //     {
    // 		test: /\.wasm$/,
    // 		type: "webassembly/async"
    // 	}
    // ],
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { modules: false }],
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /webp_enc\.wasm$/,
        type: 'javascript/auto', // ← !!
        loader: 'file-loader',
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,
  },
};
