# How to run and preview App

### 1. Header Module ###
    1. cd header-app
    2. npm install
    3. npm run build
    4. npm run preview
    5. run in http://localhost:4173/ 
   
### 2. Content Module ###
    1. cd content-app
    2. npm install
    3. npm run build
    4. npm run preview
    5. run in http://localhost:4174/
     
### 3. Run main app contain Header module and Content module
    1. cd main-app
    2. npm install
    3. npm run dev
    4. http://localhost:5173/

### Vite config main app module federation
``` 
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mainApp',
      remotes: {
        headerApp: 'http://localhost:4173/assets/remoteEntry.js',
        contentApp: 'http://localhost:4174/assets/remoteEntry.js',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    cors: true, 
  }
});

```