import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
   plugins: [react()],
  // plugins: [
  //   // Other plugins...
  //   vitePluginGhPages(), // Add this line to use the plugin
  // ],
  build: {
    outDir: 'dist', // Output directory for production build
  },
  
 

});
