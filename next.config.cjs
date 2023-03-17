module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
};
