// Template for media queries to be used in styled-components

// constants.js
// const BREAKPOINTS = {
//     tabletMin: 550,
//     laptopMin: 1100,
//     desktopMin: 1500,
//   }
//   const QUERIES = {
//     'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
//     'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
//     'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
//   }



  const BREAKPOINTS = {
    tabletMin: 500,
    laptopMin: 1100,
    desktopMin: 1500
  }

  const QUERIES = {
    'tabletAndUp':`(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  }

//   Example of how it can be used.

//   import { QUERIES } from '../../constants';

  const WRAPPER = styled.div`
    padding: 10px;

    @media (${QUERIES.tabletAndUp}){
        padding: 20px;
    }
  `;