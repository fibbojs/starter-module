import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'StarterModule',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'three',
        'three/addons/loaders/FBXLoader.js',
        'three/addons/loaders/OBJLoader.js',
        'three/addons/loaders/GLTFLoader.js',
        'three/addons/controls/OrbitControls.js',
        'three/addons/controls/PointerLockControls.js',
        '@dimforge/rapier3d',
      ],
    },
  },
  plugins: [wasm()],
})
