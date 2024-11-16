// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'uxwing.com',
          port: '',
          pathname: '/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png',
        },
      ],
    },
  }