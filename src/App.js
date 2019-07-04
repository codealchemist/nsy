import React from 'react';
import ReactMediaVisualizer from 'react-media-visualizer'
import './App.css';

class App extends React.PureComponent {
  state = {
    playlist: [],
    playlistIsPlaying: true,
    currentSongIndex: 0,
    theme: 'spotify'
  }

  componentDidMount () {
    const playlist = [
      'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265042/audio/02-come-together_rtlzff.mp3',
      'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265025/audio/eye-of-the-tiger_laih7c.mp3',
      'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265045/audio/the-wall_kwlx2i.mp3',
      'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265041/audio/rehen_ykmps7.mp3',
      'https://res.cloudinary.com/hnkdyabc4/video/upload/v1562265046/audio/under-pressure_av2y1j.mp3'
    ]
    this.setState({ playlist })
  }

  receiveStateUpdates = payload => {
    if (payload.theme) {
      switch (payload.theme) {
        case 'spotify':
          // root.style.setProperty('--content-height', '82px')
          break
        case 'youtube':
          // root.style.setProperty('--content-height', '72px')
          break
        case 'soundcloud':
          // root.style.setProperty('--content-height', '48px')
          break
        default:
          break
      }
    }
    this.setState(payload)
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NSY</h1>
        </header>

        <ReactMediaVisualizer
          playlist={this.state.playlist}
          receiveStateUpdates={this.receiveStateUpdates}
          playlistIsPlaying={this.state.playlistIsPlaying}
          theme={this.state.theme}
          currentSongIndex={this.state.currentSongIndex} />
      </div>
    )
  }
}
  
export default App;
