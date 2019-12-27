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
          name: 'Intro',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487568/audio/nsy-vivo-wolf-2019/01-intro_mupmfn.mp3',
          cover: logo
        },
        {
          name: 'Come Together',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487630/audio/nsy-vivo-wolf-2019/02-come-together_rmgwho.mp3',
          cover: logo
        },
        {
          name: 'Rehén',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487671/audio/nsy-vivo-wolf-2019/03-rehen_mo8dpd.mp3',
          cover: logo
        },
        {
          name: 'Eye of the Tiger',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487637/audio/nsy-vivo-wolf-2019/04-eye-of-the-tiger_f2ehpx.mp3',
          cover: logo
        },
        {
          name: 'Another Brick in the Wall (part 2)',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487626/audio/nsy-vivo-wolf-2019/05-the-wall_a4whca.mp3',
          cover: logo
        },
        {
          name: 'Estrella',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487680/audio/nsy-vivo-wolf-2019/06-estrella_xrafg0.mp3',
          cover: logo
        },
        {
          name: 'Triste Sirena',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487665/audio/nsy-vivo-wolf-2019/07-triste-sirena_trdmhb.mp3',
          cover: logo
        },
        {
          name: 'Under Pressure',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487675/audio/nsy-vivo-wolf-2019/08-under-pressure_mbrcut.mp3',
          cover: logo
        },
        {
          name: 'Cicatrices',
          singer: 'NSY',
          musicSrc:
            'https://res.cloudinary.com/hnkdyabc4/video/upload/v1577487690/audio/nsy-vivo-wolf-2019/09-cicatrices_dl7lbb.mp3',
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
