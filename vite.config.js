
/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  optimizeDeps: {
    exclude: ['electron-updater'],
  },
  build: {
    outDir: 'dist',
    minify: false,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: require('./external-packages'),
      output: {
        entryFileNames: '[name].[format].js',
        chunkFileNames: '[name].[format].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
};
