import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    #__next {
        overflow: hidden;
    }

    body {
        overflow: visible;
        background: ${({ theme }) => theme.colors.oldLace};
        font-family: 'SourceSansPro';
        color: ${({ theme }) => theme.colors.black};
    }

    p {
        font-family: 'SourceSansPro';
    }

    a {
        color: ${({ theme }) => theme.colors.goblin};
        text-decoration: none;
        font-family: 'SourceSansPro';
    }

    h1 h2 h3 h4 h5 h6 {
        font-family: 'Montserrat';
        font-weight: bold;
    }
`;

export default GlobalStyles;
