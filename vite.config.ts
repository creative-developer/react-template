import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // vite config
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: id => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [
            // для декораторов ts-serializable
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
        },
      }),
      svgr(),
      {
        name: 'singleHMR',
        handleHotUpdate({ modules }) {
          modules.map(m => {
            // m.importedModules = new Set();
            m.importers = new Set();
          });

          return modules;
        },
      },
      checker({
        terminal: true,
        overlay: {
          initialIsOpen: false,
          position: 'br',
        },
        typescript: {
          buildMode: true,
          tsconfigPath: './tsconfig.json',
        },
        eslint: {
          dev: { logLevel: ['warning'] },
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
        enableBuild: false,
      }),
    ],
    server: {
      port: Number(env.PORT) || 3000,
    },
    define: {
      __APP_ENV__: JSON.stringify(env.PORT),
    },
    resolve: {
      alias: {
        '~assets': path.resolve(__dirname, './public/assets'),
        '~': path.resolve(__dirname, './src'),
        '~base': path.resolve(__dirname, './src/base'),
        '~helpers': path.resolve(__dirname, './src/helpers'),
        '~hooks': path.resolve(__dirname, './src/hooks'),
        '~modules': path.resolve(__dirname, './src/modules'),
        '~routes': path.resolve(__dirname, './src/routes'),
        '~screens': path.resolve(__dirname, './src/screens'),
        '~styles': path.resolve(__dirname, './src/styles'),
        '~typeDeclarations': path.resolve(__dirname, './src/typeDeclarations'),
        '~types': path.resolve(__dirname, './src/types'),
        '~components': path.resolve(__dirname, './src/components'),
      },
    },
  };
});

