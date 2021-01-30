const Path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
    config.resolve.alias['~'] = Path.join(process.cwd(), '.');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
