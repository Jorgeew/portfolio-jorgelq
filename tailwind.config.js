

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-slide-in': {
          '0%':   { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
      },
      animation: {
        'fade-slide-in': 'fade-slide-in 500ms ease forwards',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};