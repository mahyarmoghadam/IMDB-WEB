module.exports = {
  // purge: [
  //   "./src/*/.{js,ts,jsx,tsx}",
  //   "./pages/*/.{js,ts,jsx,tsx}",
  //   "./components/*/.{js,ts,jsx,tsx}",
  // ],
  mode: 'jit',
  content: [
    "./components/lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "./models/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}