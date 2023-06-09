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
        // destination: 'http://localhost:3888/:path*'
        // home
        destination: 'http://192.168.186.118:3888/:path*'
        // office
        // destination: 'http://172.16.39.156:3888/:path*'
      }
    ]
  }
};
