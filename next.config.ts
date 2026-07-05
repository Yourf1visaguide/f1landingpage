const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;