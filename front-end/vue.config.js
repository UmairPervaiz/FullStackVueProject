const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8000'
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'my-ecommerse-website';
      return args;
    });
  }
})
