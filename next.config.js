const withLess = require('@zeit/next-less')
const withImages = require('next-images')
const path = require('path')

module.exports = withImages(
  withLess({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }]
      })

      config.module.rules.push({
        test: /\.graphqls$/,
        exclude: /node_modules/,
        use: [
          { loader: 'graphql-tag/loader' },
          { loader: 'graphql-let/schema/loader' }
        ]
      })

      config.node = {
        fs: 'empty'
      }

      return config
    },
    poweredByHeader: false
  })
)
