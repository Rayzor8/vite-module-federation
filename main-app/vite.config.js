import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mainApp',
      remotes: {
        headerApp: 'http://localhost:4174/assets/remoteEntry.js',
        contentApp: 'http://localhost:4173/assets/remoteEntry.js',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    cors: true,  // Aktifkan CORS
  }
});