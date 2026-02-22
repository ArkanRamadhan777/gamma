/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Royal Blue
          dark: '#1E40AF',
          light: '#3B82F6',
        },
        accent: {
          DEFAULT: '#F97316', // Orange
          dark: '#EA580C',
          light: '#FB923C',
        },
        neutral: {
          DEFAULT: '#F3F4F6',
          light: '#F9FAFB',
          dark: '#E5E7EB',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
