const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins(
  [ withSvgr ],
  {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [
        path.join(__dirname, 'src', 'commons', 'styles'),
      ],
    },
  }
);

module.exports = nextConfig
