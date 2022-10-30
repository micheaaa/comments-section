const typeCompiler = require('@deepkit/type-compiler')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      use: {
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            noEmit: false
          },
          getCustomTransformers: () => ({
            before: [typeCompiler.transformer],
            afterDeclarations: [typeCompiler.declarationTransformer],
          }),
        }
      },
      exclude: /node_modules/,
    })

    return config
  },
  experimental: {
    appDir: true,
    enableUndici: true,
  },
}

module.exports = nextConfig
