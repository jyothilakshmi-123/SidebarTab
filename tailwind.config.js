module.exports = {
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./assets/**/*.{css}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#3B82F6',
        'primary-600': '#2563EB',
        'primary-700': '#1D4ED8',
        'primary-800': '#1E40AF',
        'secondary-500': '#22C55E',
        'secondary-600': '#16A34A',
        'secondary-700': '#15803D',
        'secondary-800': '#166534',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
