/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
