import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/entrecenas-landing/', // altere para o nome do seu repositório no GitHub
  build: {
    outDir: 'dist'
  }
});