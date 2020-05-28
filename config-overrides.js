const webpack = require('webpack')

module.exports = {
  webpack: config => {
    const VERSION = `Nav v${require('./package.json').version}`
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(VERSION),
      'process.env.commitHEAD':
        JSON.stringify(require('child_process')
          .execSync('git rev-parse HEAD')
          .toString()
        )
    }),)

    return {
      ...config
    }
  }
}
