import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>

            <div style={{textAlign: 'center'}}>
              <img
                src="me.jpg"
                alt="avatar"
                style={{height: '350px', padding:'2em', marginRight:'-150px'}}
                 />
                 
            </div>

            <h2 style={{paddingTop: '0.5em', textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-150px'}}>Costru Diana</h2>
            <h4 style={{color: '#e60000', textAlign: 'center', fontWeight:'bold', fontFamily:'Dancing Script', fontSize:'35px', marginRight:'-150px'}}>Founder of Teaching Portal</h4>
          </Cell>

          <Cell col={4}>
          <div>
          <p style={{textAlign: 'left', fontFamily:'Lora', fontSize:'20px', marginRight:'-440px', marginLeft:'10px', padding:'4.5em', textIndent:'20px', lineHeight:'1.7'}}>
          Teaching portal is a community designed to prepare students for their exams at any subjects. Here all the applicants have 
          the opportunity to be taught by the best teachers through videos or articles. Also they put a lot of tasks which are similar
           with the exam items, in that way the student will be sure that after some course he will be able to pass the exam with succes.
           We invited the best teacher to accomplish our mission, you can saw them talking on TedX or teaching on other platforms but in our 
           case they will assume the responsibility to prepare students only for their exams.  
          </p>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;

