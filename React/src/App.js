import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar/Navbar';
import MobileHamburgerPopout from './components/MobileHamburgerPopout/MobileHamburgerPopout';
import Backdrop from './components/Backdrop/Backdrop';

//pages
import HomePage from "./pages/Home";
import RandomTweet from "./pages/RandomTweet";
import TweetFinder from "./pages/TweetFinder";
import NotFound from "./pages/404";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburgerOpen: false
    };
  }

  hamburgerButtonClickHandler = () => {
    this.setState((prevState) => {
      return {
        hamburgerOpen: !prevState.hamburgerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      hamburgerOpen: false
    });
  };

  render() {
    let backdrop;
    if (this.state.hamburgerOpen) {
      backdrop = < Backdrop click = {
        this.backdropClickHandler
      }
      />
    }
    return ( <
      BrowserRouter >
      <
      div style = {
        {
          height: '100%'
        }
      } >
      <
      Navbar hamburgerButton = {
        this.hamburgerButtonClickHandler
      }
      /> <
      MobileHamburgerPopout show = {
        this.state.hamburgerOpen
      }
      /> {
        backdrop
      } <
      Switch >
      <
      Route exact path = "/"
      component = {
        HomePage
      }
      /> <
      Route path = "/404"
      component = {
        NotFound
      }
      /> <
      Route path = "/TweetFinder"
      component = {
        TweetFinder
      }
      /> <
      Route path = "/RandomTweet"
      component = {
        RandomTweet
      }
      /> <
      Redirect to = "/404" / >
      <
      /Switch> <
      /div> </BrowserRouter >
    );
  }
}

export default App;