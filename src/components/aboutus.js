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

            <h2 style={{ textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-150px'}}>Costru Diana</h2>
            <h4 style={{color: '#e60000', textAlign: 'center', fontWeight:'bold', fontFamily:'Dancing Script', fontSize:'35px', marginRight:'-150px'}}>Founder of Teaching Portal</h4>
          </Cell>

          <h1 style={{paddingTop:'0.5em', textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-150px', marginLeft:'50px'}}>What is Teaching Portal?</h1>
          <Cell col={4}>
          <div>
          <p style={{textAlign: 'left', fontFamily:'Lora', fontSize:'23px', marginRight:'4px', marginLeft:'-580px', padding:'5.5em', textIndent:'20px', lineHeight:'1.7'}}>
          Teaching portal is a community designed to prepare students for their exams at any subjects. Here all the applicants have 
          the opportunity to be taught by the best teachers through videos or articles. Also they put a lot of tasks which are similar
           with the exam items, in that way the student will be sure that after some course he will be able to pass the exam with succes.
           We invited the best teacher to accomplish our mission, you can saw them talking on TedX or teaching on other platforms but in our 
           case they will assume the responsibility to prepare students only for their exams.  
          </p>
          </div>
          </Cell>

         {/* ------------------------------- */}

          <Cell col={4}>

<div style={{textAlign: 'center'}}>
  <img
    src="curly.png"
    alt="avatar"
    style={{height: '350px', padding:'1em', marginRight:'-2150px'}}
     />
     
</div>

<h2 style={{ textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-2150px'}}>Lucy Miller</h2>
<h4 style={{color: '#e60000', textAlign: 'center', fontWeight:'bold', fontFamily:'Dancing Script', fontSize:'35px', marginRight:'-2150px'}}>Manager of Teaching Portal</h4>
</Cell>

<h1 style={{paddingTop:'0.5em', textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'150px', marginLeft:'-380px'}}>Why you should choose us?</h1>
<Cell col={4}>
<div>
<p style={{textAlign: 'left', fontFamily:'Lora', fontSize:'23px', marginRight:'300px', marginLeft:'-940px', padding:'5.5em', textIndent:'20px', lineHeight:'1.7'}}>
Teaching Portal is a global community, welcoming people from every discipline and culture who seek 
a deeper understanding of the world. We believe passionately in the power of ideas to change attitudes,
 lives and, ultimately, the world. On Teaching Portal.com, we're building a clearinghouse of free knowledge 
 from the world's most inspired thinkers — and a community of curious souls to engage with ideas and each 
 other, both online and at Teaching Portal and TEDx events around the world, all year long.
In fact, everything we do — from our Conferences to our  Teaching Portal Talks to the projects sparked by 
the  Teaching Portal Prize, from the global Teaching Portal community to the Teaching Portal lesson series
 — is driven by this goal: How can we best spread great ideas?

</p>
</div>
</Cell>

{/* ------------------------------- */}
<Cell col={4}>

<div style={{textAlign: 'center'}}>
  <img
    src="sam.png"
    alt="avatar"
    style={{height: '350px', marginRight:'-150px'}}
     />
     
</div>

<h2 style={{ textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-150px'}}>Nancy Sullivan</h2>
<h4 style={{color: '#e60000', textAlign: 'center', fontWeight:'bold', fontFamily:'Dancing Script', fontSize:'35px', marginRight:'-150px'}}>Student at the Teaching Portal</h4>
</Cell>

<h1 style={{ textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-150px', marginLeft:'50px'}}>Opinion of our users</h1>
<Cell col={4}>
<div>
<p style={{textAlign: 'left', fontFamily:'Lora', fontSize:'23px', marginRight:'4px', marginLeft:'-450px', padding:'4.5em', textIndent:'20px', lineHeight:'1.7'}}>
Very explained even for a short course. It's not for full understanding, but it works perfectly 
as an introduction for the subject. And you can really build a robot after taking this course.
</p>
</div>
</Cell>
        </Grid>
      </div>
    )
  }
}

export default About;

