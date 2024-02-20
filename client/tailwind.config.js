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
        customRedOpacity: 'rgba(149, 22, 28, .7)',
        customBrown: 'rgba(61, 21, 21, 0.8)',
        customBrownOpacity: 'rgba(61, 21, 21, 0.7)',
        customBrownDark: 'rgba(34, 12, 12, 0.9)',
        customBrownLightOpacityLow: 'rgba(248, 230, 211, 0.5)',
        customBrownOpacityLow:'rgba(34, 12, 12, 0.5)',
        customBgApply: '#E7D9CA',
        customBgHeaderApply: 'rgba(95,11,0,0.4);',
        customBgFormApply: 'rgba(253, 246, 238, 0.5)',
        customBgBlackOpacityLow: 'rgba(0, 0, 0, 0.4)',
        customGreenOpacity: 'rgba(77, 178, 125, 0.7)',
        customBlack2: '#141414',
        customWhiteOpacityLow: 'rgba(255, 255, 255, 0.7)',
        customBlack3: '#262626',
        blueFacebook: '#4173B8',
        redGoogle: '#E1483B',
        customGray: '#4C4C4C',
        customReserve9: 'rgba(253, 246, 238, 0.5)',
        customReserve10: 'rgba(253, 246, 238, 0.5)',
        
      },
      fontFamily: {
        'fondamento': ['Fondamento', 'serif'],
        'archivoBlack': ['Archivo Black', 'serif'],
        'arimo': ['Arimo', 'sans-serif', "bold"] 
      },
      width: {
        '13/12':'110%',
        '14/12':'125%',
        '15/12':'150%',
        '128':'32rem'
      },
      height: {
        '13/12':'110%',
        '14/12':'125%',
        '15/12':'150%',
        '128':'32rem',
        '0.3':'0.3px',
        '0.2':'0.2px',
        '0.1':'0.1px'
      },
      borderWidth: {
        '0.3':'.3px',
        '0.2':'.2px',
        '0.1':'.1px'
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
