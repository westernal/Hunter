const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = {
  trailingSlash: true,
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})