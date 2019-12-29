import React from 'react'
import styled from 'styled-components'

const InstagramContainer = styled.div`
  display: grid;
`

export default class Instagram extends React.PureComponent {
  render() {
    return (
      <InstagramContainer>
        <a href="https://www.instagram.com/no_soy_yo_musica" target="_blank">
          <img
            src="social/instagram.png"
            alt="Instagram"
            className="socialItem"
          />
        </a>
      </InstagramContainer>
    )
  }
}
