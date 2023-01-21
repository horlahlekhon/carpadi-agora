/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: false,
  publicRuntimeConfig: {
      accessKeyId: process.env.KEY_ID || 'AKIAZEW6KCSPYAHB3ZDW',
      secretAccessKey: process.env.ACCESS_KEY || '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',
      region: process.env.REGION || 'eu-west-2',
      bucket: process.env.S3_BUCKET || 'carpadi',
      cloudfront: process.env.CLOUDFRONT_URL || 'https://d16encqm9nbktq.cloudfront.net',
      staticBase: process.env.CLOUDFRONT_STATIC_BASE || "https://d16encqm9nbktq.cloudfront.net/static_assets",
      cloudinaryCloudName: process.env.CLOUD_NAME || '',
      cloudinaryPreset: process.env.CLOUD_PRESET || '',
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:8000/api/v1' // development api
          : 'https://api.carpadi.com/api/v1' // production api
  },
  output: 'standalone',
}
