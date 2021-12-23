module.exports = {
  // Informa quais pastas usaram classes tailwind
  purge: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'],
    // Array com todas as classes que devem estar presentes na versão final
    sefelist: [
      /^bg-/,
      /^to-/,
      /^from-/
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
