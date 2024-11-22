import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Verifique se o ambiente de desenvolvimento está ativo
const isDev = process.env.NODE_ENV === 'development';

// Utilize o 'path' apenas em desenvolvimento
let path = isDev ? import('path') : Promise.resolve(null);

export default defineConfig(async () => {
  const resolvedPath = await path;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolvedPath ? resolvedPath.default.resolve(__dirname, 'src') : 'src',
      },
    },
  };
});
