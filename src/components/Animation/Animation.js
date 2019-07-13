import React from 'react'
import styled from 'styled-components'
import config from 'config/index'

const { logo } = config

const Container = styled.div`
  background: black;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const RotatingLogo = styled.div`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  width: 100%;
  height: 100%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: fixed;
  top: 0;
  bottom: 0;
  animation: rotate 4s linear infinite;
`

export default class Animation extends React.PureComponent {
  render() {
    return (
      <Container>
        <RotatingLogo />
      </Container>
    )
  }
}
