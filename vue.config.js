// vue.config.js
module.exports = {
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
