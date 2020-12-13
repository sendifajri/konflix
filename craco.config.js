const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#dc1723",
              "@btn-font-weight": "700",
              "@border-radius-base": "10px",
              "@label-color": "#344563",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
