import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'components/Header'
import WelcomePage from 'pages/WelcomePage'
import InConcertPage from 'pages/InConcertPage'
import './App.css'

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={WelcomePage} />
          <Route path="/concert" exact component={InConcertPage} />
        </div>
      </Router>
    )
  }
}

export default App
