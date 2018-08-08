import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily:'Abril Fatface', fontSize:'20px'}} to="/">Teaching Portal</Link>} scroll>
            <Navigation>
                <Link style={{textDecoration: 'none', fontFamily:'Abril Fatface', fontSize:'20px' }} to="/resume">Resume</Link>
                <Link style={{textDecoration: 'none', fontFamily:'Abril Fatface', fontSize:'20px' }} to="/aboutus">About Us</Link>
                <Link style={{textDecoration: 'none', fontFamily:'Abril Fatface', fontSize:'20px' }} to="/projects">Projects</Link>
                <Link style={{textDecoration: 'none', fontFamily:'Abril Fatface', fontSize:'20px' }} to="/contact">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily:'Abril Fatface', fontSize:'23px' }} to="/">Teaching Portal</Link>}>
            <Navigation>
              <Link to="/resume" style={{textDecoration: 'none', color: 'black', fontFamily:'Vollkorn', fontSize:'20px', fontWeight:'bold'}}>Resume</Link>
              <Link to="/aboutus" style={{textDecoration: 'none', color: 'black', fontFamily:'Vollkorn', fontSize:'20px', fontWeight:'bold'}}>About Us</Link>
              <Link to="/projects" style={{textDecoration: 'none', color: 'black', fontFamily:'Vollkorn', fontSize:'20px', fontWeight:'bold'}}>Projects</Link>
              <Link to="/contact" style={{textDecoration: 'none', color: 'black', fontFamily:'Vollkorn', fontSize:'20px', fontWeight:'bold'}}>Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
