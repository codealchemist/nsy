import React from 'react'
import styled from 'styled-components'
import Facebook from './Facebook'
import Instagram from './Instagram'
import YouTube from './YouTube'

const SocialContainer = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .socialItem {
    width: 2em;
    padding: 1em;
    opacity: 0.5;

    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`

export default class Social extends React.PureComponent {
  render() {
    return (
      <SocialContainer>
        <Facebook />
        <Instagram />
        <YouTube />
      </SocialContainer>
    )
  }
}
