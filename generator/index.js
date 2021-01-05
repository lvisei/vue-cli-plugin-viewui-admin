// https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#generator

module.exports = (api) => {
  api.extendPackage({
    dependencies: {
      axios: '^0.21.1',
      'crypto-js': '^4.0.0',
      'v-clipboard': '^2.2.3',
      'view-design': '^4.4.0',
      'vue-cropper': '^0.5.6',
    },
    devDependencies: {
      'iview-loader': '^1.3.0',
      'svg-sprite-loader': '^4.3.0',
    },
    scripts: {
      dev: 'npm run serve',
      'build:r': 'vue-cli-service build --report',
      modern: 'vue-cli-service build --modern --report',
      inspect: 'vue-cli-service inspect --mode=production',
    },
  })

  api.render('./template')
}
