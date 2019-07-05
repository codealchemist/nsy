import React from 'react';
import Player from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import './App.css';

const nsyLogo = 'https://res.cloudinary.com/hnkdyabc4/image/upload/w_200,c_fill,ar_1:1,g_auto,r_max,bo_1px_solid_black,b_rgb:262c35/v1562266909/img/nsy_z1hfvz.jpg'

class App extends React.PureComponent {
  state = {
    options: {
      audioLists: [
        {
          name: 'Come Together',
          singer: 'NSY',
          musicSrc: 'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265042/audio/02-come-together_rtlzff.mp3',
          cover: nsyLogo
        },
        {
          name: 'Eye of the Tiger',
          singer: 'NSY',
          musicSrc: 'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265025/audio/eye-of-the-tiger_laih7c.mp3',
          cover: nsyLogo
        },
        {
          name: 'Another Brick in the Wall (part 2)',
          singer: 'NSY',
          musicSrc: 'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265045/audio/the-wall_kwlx2i.mp3',
          cover: nsyLogo
        },
        {
          name: 'Rehén',
          singer: 'NSY',
          musicSrc: 'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562291630/audio/rehen_j2pyg8.mp3',
          cover: nsyLogo
        },
        {
          name: 'Under Pressure',
          singer: 'NSY',
          musicSrc: 'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265046/audio/under-pressure_av2y1j.mp3',
          cover: nsyLogo
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
      showMiniProcessBar: true,
      defaultPosition: {
        top: 'calc(50% + 60px)',
        left: 'calc(50% - 40px)'
      }
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NSY</h1>
        </header>

        <Player {...this.state.options} />
      </div>
    )
  }
}
  
export default App;
