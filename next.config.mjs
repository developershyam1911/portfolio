/** @type {import('next').NextConfig} */
const nextConfig = {
    // images:{ 
    //     domains:["firebasestorage.googleapis.com","encrypted-tbn0.gstatic.com","www.bookeventz.com","i.pinimg.com","english.cdn.zeenews.com","uxwing.com","images.pexels.com"]
    // }
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.googleapis.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.gstatic.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.bookeventz.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.pinimg.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.zeenews.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.uxwing.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: '**.pexels.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'lh7-us.googleusercontent.com',
            port: '',
          },
        ],
      },
      async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}

export default nextConfig;
