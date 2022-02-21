module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/images/squares.png')",
        'hero-image': "url('assets/images/img6.jpg')"
      },
      fontFamily: {
        body: ['Montserrat'],
        heading: ['Nunito']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
};
