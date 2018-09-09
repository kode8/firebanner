// vue.config.js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "./src/scss/firebanner-ui-toolkit.scss";
        `,
      },
    },
  },
  //   postcss: {
  //     // options here will be passed to postcss-loader
  //   },
};
