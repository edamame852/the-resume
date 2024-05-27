import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;
    height: 100vh;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }

  td,
  th {
    padding: 4px 8px 4px 4px;
    text-align: left;
  }

  th {
    font-weight: 700;
  }
  
  
  `;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles