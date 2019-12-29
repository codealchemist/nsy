import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WelcomePage from 'pages/WelcomePage'
import InConcertPage from 'pages/InConcertPage'
import Header from 'components/Header'
import Social from 'components/Social'
import './App.css'

console.log(`
    _   _________  __   ____             __  
   / | / / ___/\\ \\/ /  / __ \\____  _____/ /__
  /  |/ /\\__ \\  \\  /  / /_/ / __ \\/ ___/ //_/
 / /|  /___/ /  / /  / _, _/ /_/ / /__/ ,<   
/_/ |_//____/  /_/  /_/ |_|\\____/\\___/_/|_|  

Welcome hacker!
Facebook: https://fb.me/nsyRock
Instagram: https://www.instagram.com/no_soy_yo_musica
YouTube: https://www.youtube.com/channel/UCmjwon174jYctOZE0s6YuWw
`)

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Social />
          <Route path="/" exact component={WelcomePage} />
          <Route path="/concert" exact component={InConcertPage} />
        </div>
      </Router>
    )
  }
}

export default App
