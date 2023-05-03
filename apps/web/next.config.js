module.exports = {
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
