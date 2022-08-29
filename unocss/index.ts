import { UnocssNuxtOptions } from "@unocss/nuxt"
import colors from "./colors.json"
import heights from "./heights.json"
import { safelist } from "./safelist"

export const uno: UnocssNuxtOptions = {
    autoImport: true,
    uno: true,
    icons: true,
    attributify: {
      ignoreAttributes: ['label'],
    },
    typography: true,
    webFonts: {
      provider: 'google',
      fonts: {
        sans: ['Cairo:200,300,400,500,600,700,800,900'],
        serif: ['Inter:100,200,300,400,500,600,700,800,900'],
      },
    },
    safelist: safelist,
    preflights: [
      // color: ${theme.colors.gray?.[700]};
      {
        getCSS: ({ theme }) => `
            * {
              padding: 0;
              margin: 0;
              font-family: ${theme['fontFamily']['serif']};
            }
            body {
                overflow: hidden;
                background-color: #000;
                color: ${theme['colors']['gray']['700']};
            }
          `
      }
    ],
    theme: {
      colors: colors,
      height: heights,
    },
}