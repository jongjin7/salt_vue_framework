const webpack = require("webpack");
module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV === "production" ? false : true,
  },
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
    config.devtool("eval-source-map");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        // options.compilerOptions.preserveWhitespace = false;
        options.compilerOptions.whitespace = "preserve";
        return options;
      });
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // 글로벌 변수
        $: "jquery",
        jquery: "jquery",
      }),
    ],
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
};
