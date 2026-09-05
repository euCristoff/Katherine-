import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'save-doctor-photo-endpoint',
        configureServer(server) {
          server.middlewares.use('/api/save-doctor-photo', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const { imageBase64 } = JSON.parse(body);
                  if (imageBase64 && imageBase64.includes('base64,')) {
                    const base64Data = imageBase64.split(';base64,').pop();
                    if (base64Data) {
                      const buffer = Buffer.from(base64Data, 'base64');
                      fs.mkdirSync('src/assets', { recursive: true });
                      fs.mkdirSync('public/assets', { recursive: true });
                      fs.writeFileSync('src/assets/dra-katherine.png', buffer);
                      fs.writeFileSync('public/assets/dra-katherine.png', buffer);
                      fs.writeFileSync('public/dra-katherine.png', buffer);
                      console.log('Saved real photo of Dra. Katherine to disk!');
                      res.writeHead(200, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: true }));
                      return;
                    }
                  }
                } catch (err) {
                  console.error('Failed to parse photo body', err);
                }
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'invalid data' }));
              });
            } else {
              res.writeHead(404);
              res.end();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
