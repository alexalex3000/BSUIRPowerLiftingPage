import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig(({mode}) => {
    const isProd = mode === 'production'

    return {
        plugins: [react(), svgr()],
        base: isProd ? '/BSUIRPowerLiftingPage/' : '/',
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: (content, filename) => {
                        // Добавляем все технические файлы в исключения, чтобы они не импортировали сами себя
                        if (
                            filename.includes('_shared.scss') ||
                            filename.includes('_variables.scss') ||
                            filename.includes('_fonts.scss') ||
                            filename.includes('_mixins.scss')
                        ) {
                            return content;
                        }
                        const sharedPath = path.resolve(__dirname, 'src/styles/_shared.scss').replace(/\\/g, '/');
                        return `@import "${sharedPath}";\n${content}`;
                    }
                }
            }
        }
    }
})