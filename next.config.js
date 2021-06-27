// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction
  },
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: [
      'i.imgur.com',
      'user-images.githubusercontent.com',
      'res.cloudinary.com'
    ]
  }
})
