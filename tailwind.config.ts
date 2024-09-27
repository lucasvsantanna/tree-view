import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      width: {
        84: '21rem',
      },
      height: {
        57: '14.25rem',
      },
      gridTemplateColumns: {
        app: '30rem 1fr',
      },
      colors: {
        dark: {
          blue: '#17192D',
        },
        gray: {
          150: '#E3EAEF',
        },
        border: {
          card: '#D8DFE6',
        },
      },
    },
  },
  plugins: [],
}
export default config
