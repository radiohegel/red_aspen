const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')

const fileLoader = environment.loaders.get('file')

// exclude 'svg' from file loader
fileLoader.test = /\.(jpg|jpeg|png|gif|eot|otf|ttf|woff|woff2)$/i

environment.loaders.append('vue', vue)
environment.loaders.insert('svg', {
  test: /\.svg$/,
  exclude: /node_modules/,
	loader: 'vue-svg-loader'
})

module.exports = environment
