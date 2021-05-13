module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: true,
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
