import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="one.png"
              alt="avatar" 
              className="avatar-img"
              />

              <img
              src="three.png"
              alt="avatar"
              className="avatar-img"
              />

              <img
              src="two.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Elizabeth Halsey</h1>
              <h4>Teacher of literature</h4>

            <hr/>

          <p>“That is part of the beauty of all literature. You discover that your 
            longings are universal longings, that you're not lonely and isolated
             from anyone. You belong.” </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
        </div>
        
        <div className="banner-text-one">
              <h1>Colin Clark</h1>
              <h4>Teacher of mathematics</h4>
            <hr/>

          <p>"The science of pure mathematics, in its modern developments, may claim to be the most original creation of the human spirit."</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
        </div>

        <div className="banner-text-two">
              <h1>Adam Bennett</h1>
              <h4>Teacher of physics</h4>
            <hr/>

          <p>"No one undertakes research in physics with the intention of winning a prize.
             It is the joy of discovering something no one knew before."</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
          </div>
        </div>
        </div>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
