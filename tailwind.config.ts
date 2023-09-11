import { type Config } from "tailwindcss";

export default {
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config;
