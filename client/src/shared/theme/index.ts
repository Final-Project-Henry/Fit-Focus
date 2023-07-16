import styled from 'styled-components'

export default {
  colors: {
    white: '#ffffff',
    dark: '#120907',
    black: '#000000',
    darkGray: '#424f5e',
    gray: '#8790ab',
    lightGray: '#b6c1d1',
    darkBlue: '#0a131c',
    blue: '#2f4574',
    silver: '#C0C0C0',
    electricBlue: '#0828C9',
    orange: '#ffa000',
  },
  bgCardColors: {
    genre: {
      man: '#1298C3',
      woman: '#E881D3',
      both: 'linear-gradient(90deg, rgba(18,152,195,1) 0%, rgba(232,129,211,1) 100%)',
    },
    difficulty: {
      1: '#70A802',
      2: '#F7B704',
      3: '#F44F0B',
    },
    muscle: {
      upper_body: '#006CB7',
      lower_body: '#0B6D30',
      functional: '#E76B21',
      abs: '#B11317',
      stretching: '#6D2A77',
    },
  },
  backgrounds: {
    dark: '20, 25, 46, 0.5',
  },
  dims: {
    widths: {
      small: '30em',
      medium: '40em',
      forms: '17.5em',
      smallControl: '10em',
    },
    padding: {
      largePadding: '0.8em 1.2em',
      mediumPadding: '2em',
      tallPadding: '3em 1.5em',
    },
    margin: {
      small: '0.5em',
      intersection: '1em',
      normal: '2em',
      inline: '0.5ch',
    },
    borderRadius: {
      small: '0.4em',
      normal: '0.8em',
    },
    fonts: {
      small: '0.8em',
      extraSmall: '1.2rem',
      medium: '1.5em',
      title: '3em',
      section: '3rem',
    },
    circle: {
      small: '1em',
      medium: '3em',
      big: '6em',
    },
  },
  shadows: {
    depth1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    depth2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    depth3: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    depth4: '0 4px 10px #000e3e55',
  },
}

export const bgImagesLoading = styled.div`
  width: 100%;
  height: 100%;
  background: gray;
  animation-name: loading-images;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  @keyframes loading-images {
    0% {
      filter: brightness(0.5);
    }
    50% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(0.5);
    }
  }
`
