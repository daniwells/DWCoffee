/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: '#121212',
        customYellowDark: '#D4A26F',
        customYellowLight: '#F8E6D3',
        customYellow: '#D3A46E',
        customYellowExtraLight: '#FFF4E8',
        customYellowOpacityLow: 'rgba(224, 160, 95, 0.5)',
        customYellowLightOpacityLow: 'rgba(236, 200, 164, 0.5)',
        customRed: '#95161C',
        customBrown: 'rgba(61, 21, 21, 0.8)',
        customBrownDark: 'rgba(34, 12, 12, 0.9)',
        customBrownLightOpacityLow: 'rgba(248, 230, 211, 0.5)',
        customBrownOpacityLow:'rgba(34, 12, 12, 0.5)',
        customRed: '#95161C',
        customBgApply: '#E7D9CA',
        customBgHeaderApply: 'rgba(95,11,0,0.4);',
        customBgFormApply: 'rgba(253, 246, 238, 0.5)',
        customBgBlackOpacityLow: 'rgba(0, 0, 0, 0.4)',
        customGreenOpacity: 'rgba(77, 178, 125, 0.7)',
        customBlack2: '#141414',
        customWhiteOpacityLow: 'rgba(255, 255, 255, 0.7)',
        customReserve5: 'rgba(253, 246, 238, 0.5)',
        customReserve6: 'rgba(253, 246, 238, 0.5)',
        customReserve7: 'rgba(253, 246, 238, 0.5)',
        customReserve8: 'rgba(253, 246, 238, 0.5)',
        customReserve9: 'rgba(253, 246, 238, 0.5)',
        customReserve10: 'rgba(253, 246, 238, 0.5)',
      },
      fontFamily: {
        'fondamento': ['Fondamento', 'serif'],
        'archivoBlack': ['Archivo Black', 'serif'],
        'arimo': ['Arimo', 'sans-serif', "bold"] 
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   variants: {},
//   plugins: [],
// };
