/** @type {import('next').NextConfig} */
 
module.exports = {
  reactStrictMode: true, // Current : On -> Off (UseEffect -> re-render) 2x -> 1
  basePath: "",
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  publicRuntimeConfig: {
    processEnv: {
      ...Object.fromEntries(
        Object.entries(process.env).filter(([key]) =>
          key.includes('NEXT_PRIVATE_')
        )
      ),
      TRUSTED_ORIGIN: [].filter(Boolean)
    }
  }
}