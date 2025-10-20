import { createGlobalStyle } from 'styled-components/macro'
import './fonts.css'
import './publicMap.css'
import './imageGallery.css'
import { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const GlobalStyle = createGlobalStyle`
    html {
        min-width: 1366px !important;
        font-display: auto;
    }
    ::-moz-selection { /* Code for Firefox */
        background: #afefd2;
        color: black;
    }

    ::selection {
        background: #afefd2;
        color: black;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-internal-autofill-selected,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    background-color: transparent;
    transition: background-color 5000s ease-in-out 0s;
    }
    body, html {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-family: Gilroy, sans-serif;
        font-style: normal;
        letter-spacing: 0.01em;
    }
    body {
        position: relative;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -moz-font-feature-settings: "ss08";
        -webkit-font-feature-settings: "ss08";
        font-feature-settings: "ss08";
        display: flex;
        flex-direction: column;
        min-width: 1366px;
        width: auto !important;
        width: 1366px;
        background: rgb(21, 22, 24);
    }
    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,
    acronym,address,big,cite,code,del,dfn,img,ins,kbd,q,s,samp,small,strike,sub,sup,tt,
    var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,
    tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,
    header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,input,textarea,button {
    font-family: Gilroy, sans-serif;
    }
    .overflow-hidden {
        overflow: hidden;
    }
    .modal-open {
        height: 100vh;
        overflow: hidden;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    #root {
        height: auto;
        flex: 1;
        box-sizing: border-box;
        width: 100%;
    }
    h1 {
        margin: 0;
        font-size: 45px;
        font-weight: 500;
    }
    h2 {
        margin: 0;
        font-size: 30px;
        font-weight: 500;
    }
    h3 {
        margin: 0;
        font-size: 25px;
        font-weight: 300;
    }
    h5 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
    }
    p {
        margin: 0;
        line-height: 1.43;
    }
    a {
        text-decoration: none;
        color: black;
    }

    .MuiFormControl-root {
        flex-direction: column-reverse !important;
    }

    .MuiSelect-select {
        background-color: transparent !important;
    }

    .mapboxgl-ctrl-zoom-in {
        width: 40px !important;
        height: 40px !important;
    }

    .mapboxgl-ctrl-zoom-out {
        width: 40px !important;
        height: 40px !important;
    }

    .SnackbarItem-variantSuccess {
        background-color: #23b36e !important;
    }

    .MovingEffectBorder {
        &::after {
            position: absolute;
            content: "";
            top: calc(-1 * 1px);
            left: calc(-1 * 1px);
            z-index: -1;
            width: calc(100% + 1px * 2);
            height: calc(100% + 1px * 2);
            background: linear-gradient(
            60deg,
            hsl(224, 85%, 66%),
            hsl(269, 85%, 66%),
            hsl(314, 85%, 66%),
            hsl(359, 85%, 66%),
            hsl(44, 85%, 66%),
            hsl(89, 85%, 66%),
            hsl(134, 85%, 66%),
            hsl(179, 85%, 66%)
            );
            background-size: 300% 300%;
            background-position: 0 50%;
            border-radius: 50%;
            animation: ${spin} 2s infinite;
        }
    }
`
export default GlobalStyle
