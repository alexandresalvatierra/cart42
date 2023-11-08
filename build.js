const esbuild = require('esbuild')

esbuild
  .build({
    entryPoints: ['./src/app.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    target: 'es2020',
    define: {
      'process.env.NODE_ENV': '"production"'
    },
  })
  .then(() => console.log('⚡Bundle build complete ⚡'))
  .catch(() => {
    process.exit(1)
  })
