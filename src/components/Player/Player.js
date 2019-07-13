import React from 'react'
import styled from 'styled-components'
import AudioPlayer from 'react-jinke-music-player'
import config from 'config/index'
import 'react-jinke-music-player/assets/index.css'

const { logo } = config

const Container = styled.div`
  .music-player {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .audio-circle-process-bar {
      top: -70px;
      left: 10px;
    }
  }
`

export default class Player extends React.PureComponent {
  state = {
    options: {
      audioLists: [
        {
          name: 'Come Together',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265042/audio/02-come-together_rtlzff.mp3',
          cover: logo
        },
        {
          name: 'Eye of the Tiger',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265025/audio/eye-of-the-tiger_laih7c.mp3',
          cover: logo
        },
        {
          name: 'Estrella',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562449054/audio/the-reef_t29ztu.mp3',
          cover: logo
        },
        {
          name: 'Another Brick in the Wall (part 2)',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265045/audio/the-wall_kwlx2i.mp3',
          cover: logo
        },
        {
          name: 'Rehén',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562291630/audio/rehen_j2pyg8.mp3',
          cover: logo
        },
        {
          name: 'Under Pressure',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265046/audio/under-pressure_av2y1j.mp3',
          cover: logo
        }
      ],
      theme: 'dark',
      // remember: true,
      remove: false,
      // mode: 'full',
      autoPlay: false,
      showPlayMode: false,
      showLyric: false,
      preload: true,
      showMiniProcessBar: false,
      defaultPosition: {
        top: 'calc(50% + 60px)',
        left: 'calc(50% - 40px)'
      }
    }
  }

  render() {
    return (
      <Container>
        <AudioPlayer {...this.state.options} />
      </Container>
    )
  }
}
