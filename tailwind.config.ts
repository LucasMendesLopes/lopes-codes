import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#28d6f8',
        gray: '#1C1C1C',
      },
    },
  },
  plugins: [],
}
export default config
