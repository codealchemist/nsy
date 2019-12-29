import React from 'react'
import styled from 'styled-components'

const YouTubeContainer = styled.div`
  display: grid;
`

export default class YouTube extends React.PureComponent {
  render() {
    return (
      <YouTubeContainer>
        <a
          href="https://www.youtube.com/channel/UCmjwon174jYctOZE0s6YuWw"
          target="_blank"
        >
          <img src="social/youtube.png" alt="YouTube" className="socialItem" />
        </a>
      </YouTubeContainer>
    )
  }
}
