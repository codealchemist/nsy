import React from 'react'
import Animation from 'components/Animation'
import fullscreen from 'components/Fullscreen'

fullscreen.set()

export default class WelcomePage extends React.PureComponent {
  render() {
    return <Animation />
  }
}
