import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`

export const CBSimpleButton = styled.input`
  width: 10%;
  padding: 1.5em auto;
  margin: 1em auto;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid #454545;
  &:hover {
    letter-spacing: 0.8em;
    border-left: 10px solid #454545;
  }
`

export const CBAccordion = styled.div`
  > div > div:first-of-type {
    padding: 1em;
    color: #454545;
    text-transform: uppercase;
    user-select: none;
    font-weight: 200;
    cursor: pointer;
    border: 1px solid #cdcdcd;
  }
  > div > div:last-of-type {
    background-color: #f9f9f9;
    margin: 0 0.5em;
    box-shadow: 0 0 20px 2px #cdcdcd;
  }
  .cb_accordion_item {
    padding: 1em;
    // opacity: 0;
    transition: opacity 300ms ease;
    overflow: auto;
  }
  > div:first-child .cb_accordion_item {
    max-height: 200px;
  }
  > div.open .cb_accordion_item {
    opacity: 1;
    transition: opacity 700ms ease;
  }
  img.cb_accordion_item {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`

export const CBToolbarButton = styled.button`
  padding: 4px 10px;
  font: 13px 'Montserrat';
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #787878;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  border: 0;
  border-bottom: transparent 3px solid;
  border-radius: 0px;
  cursor: pointer;
  &:hover {
    color: #232323;
    background-color: transparent;
    border-bottom: #787878 3px solid;
  }
`
export const CBToolbarAnchor = styled.a`
  padding: 4px 10px;
  font: 13px 'Montserrat';
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  color: #787878;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  border: 0;
  border-bottom: transparent 3px solid;
  border-radius: 0px;
  cursor: pointer;
  &:hover {
    color: #232323;
    background-color: transparent;
    border-bottom: #787878 3px solid;
  }
`

export const CBGridRow = styled.div`
  display: grid;
  width: 100%;
`

export const CBGridCell = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  > div {
    border: 1px solid #cdcdcd;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    &:nth-child(2) {
      &:hover {
        border-color: #454545;
      }
    }
    &:nth-child(1) {
      border-left: 10px solid #cdcdcd;
      font-weight: 500;
    }

    // justify-content: center;
  }
`

export const CBInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  font-family: inherit;
`
export const CBSelect = styled.select`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  font-family: inherit;
`

export const CBHelpTip = styled.div`
  margin: auto;
  text-align: center;
  border: 2px solid #cdcdcd;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  line-height: 20px;
  cursor: pointer;

  &:before {
    content: '?';
    font-family: sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #067df7;
  }

  &:hover p {
    display: block;

    transform-origin: 100% 0%;
    -webkit-animation: ${fadeIn} 0.3s ease;
    animation: ${fadeIn} 0.3s ease;
  }

  p {
    display: none;
    font-family: sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    background-color: #ffffff;
    padding: 12px 16px;
    z-index: 999999;
    width: 178px;
    height: auto;
    position: absolute;
    //   left: 80%;
    transform: translate(-45%, 5%);
    border-radius: 3px;
    /* 	border: 1px solid #E0E0E0; */
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.1);
    color: #37393d;
    font-size: 12px;
    line-height: 18px;
    z-index: 99;
    a {
      color: #067df7;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &:before {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-bottom-color: #ffffff;
      top: -9px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:after {
      width: 10px;
      height: 40px;
      content: '';
      position: absolute;
      top: -40px;
      left: 0;
    }
  }
`

const modalShowStyle = css`
  top: 0;
`
export const CBModal = styled.div`
  display: block;
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 999;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    overflow: hidden !important;
    box-sizing: border-box;
  }
  > div {
    background: #fff;
    border: 2px solid #787878;
    width: 90%;
    height: 80%;
    border-radius: 8px;
    > div {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      height: 100%;
      padding: 1rem;
    }
  }

  ${(props) => props.state === '1' && modalShowStyle}
`

export const CBAttributeRow = styled.div`
  cursor: pointer;
  border-left: 4px solid transparent;
  height: 40px;
  padding: 0px 1rem;
  &:hover {
    border-color: #5d33b2;
    background-color: #efefef;
  }
  > div {
    display: flex;
    align-items: center;
  }
`
export const CBTabContainer = styled.div`
  display: flex;
  ul {
    display: flex;
    flex-direction: column;
    border-right: 1px solid #cdcdcd;
    padding: 0 1rem 0rem 0;
  }
  > div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    > div {
      overflow: auto !important;
      > div {
        &:nth-child(2) {
          height: 100%;
        }
      }
    }
  }
`

export const CBFilterInput = styled.input`
  font-size: 12px;
  display: block;
  width: 100%;
  height: 36px;
  padding: 0 20px;
  background: #fff;
  color: #323840;
  border: 1px solid #3d85d8;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    ~ .cb_floating_label {
      top: -8px;
      font-size: 13px;
    }
  }
`

export const CBTab = styled.div`
  width: 100%;
  padding: 25px;
  font-family: sans-serif;
  color: #444;
  ul.inline {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
  }
`

export const CBTabPanelList = styled.li`
  display: inline-block;
  margin-left: 0;
  padding: 10px;
  border-bottom: 2px solid #eee;
  transition: all 0.5s;
  font-family: Lato, sans-serif;
  font-weight: 300;
  cursor: pointer;
  text-transform: capitalize;
  color: ${(props) => (props.selected ? '#444' : '#aaa')};
  border-right: 4px solid
    ${(props) => (props.selected ? '#337ab7' : 'transparent')};
`
