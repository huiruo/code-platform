const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: 'standalone',
  async rewrites() {
    return [
      {
        // 接口前缀带上`/code-platform/`
        source: '/code-platform/:path*',
        destination: 'http://localhost:3888/:path*'
      }
    ]
  }
};
