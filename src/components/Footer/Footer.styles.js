import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #38758c;
  color: white;
  display: flex;
  height: 5em;
  box-shadow: 0px -3px 19px -4px rgba(0, 0, 0, 0.68);
`
export const Menu = styled.ul`
  justify-content: space-around;
  align-items: center;
  text-align: center;
  display: flex;
  width: 100%;

  @keyframes slideInUp {
    0% {
      transform: translateY(100%);
      visibility: visible;
    }
    100% {
      transform: translateY(0);
    }
  }

  .selected {
    & li {
      position: relative;
      bottom: 30px;
    }

    &::before {
      content: '';
      background: #9bd1dd;
      border: 4px solid #c8deeb;
      position: absolute;
      top: 14%;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      z-index: -1;
      margin: -36px;
      animation-name: slideInUp;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }

    & span {
      animation-name: slideInUp;
      animation-duration: 1s;
      animation-fill-mode: both;
      color: #38758c;
    }
  }
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  color: #fff;
`
