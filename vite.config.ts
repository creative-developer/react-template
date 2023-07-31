import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
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
    ],
    server: {
      port: Number(env.PORT) || 3000,
    },
    define: {
      __APP_ENV__: JSON.stringify(env.PORT),
    },
  };
});

