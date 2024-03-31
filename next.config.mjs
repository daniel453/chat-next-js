/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/chat',
            permanent: true,
          },
        ]
      },
    
};

export default nextConfig;
