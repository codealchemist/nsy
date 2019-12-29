import React from 'react'
import styled from 'styled-components'

const FacebookContainer = styled.div`
  display: grid;
`

export default class Facebook extends React.PureComponent {
  render() {
    return (
      <FacebookContainer>
        <a href="https://fb.me/nsyRock" target="_blank">
          <img
            src="social/facebook.png"
            alt="Facebook"
            className="socialItem"
          />
        </a>
      </FacebookContainer>
    )
  }
}
