import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { requestAutoImport } from '@oasis-end/request'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    server: {
        port: 5000
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ],
    },
    plugins: [
        vue(),
        vueJsx(),
        Components({
            resolvers: [NaiveUiResolver()]
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'pinia',
                requestAutoImport,
                {
                    'naive-ui': [
                      'useDialog',
                      'useMessage',
                      'useNotification',
                      'useLoadingBar'
                    ]
                }
            ],
            dts: './auto-imports.d.ts',
        })
    ],
})
