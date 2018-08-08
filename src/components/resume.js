import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="one.png"
                alt="avatar"
                style={{height: '350px', padding:'2em', marginRight:'-150px' }}
                 />
            </div>

            <h2 style={{paddingTop: '0.5em', textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-150px'}}>Colin Clark</h2>
            <h4 style={{color: '#6c5b7b', textAlign: 'center', fontWeight:'bold', fontFamily:'Dancing Script', fontSize:'35px', marginRight:'-150px'}}>Teacher of mathematics</h4>
            <hr style={{borderTop: '3px solid #355c7d', width: '65%', marginLeft:'170px'}}/>
            <p style={{textAlign: 'center', fontFamily:'Lora', fontSize:'20px', marginRight:'-100px',marginLeft:'50px'}}>Mathematics makes our life orderly and prevents chaos. Certain qualities that are nurtured by 
            mathematics are power of reasoning, creativity, abstract or spatial thinking, critical thinking, problem-solving 
            ability and even effective communication skills.Math is the one skill you need to master in your life, 
            even if it is the only one, you will at least be able to live without being cheated, robbed or abused. 
            You see, without math we just cannot live or survive. We need math in our everyday lives. Just doing 
            the basic essentials is dependant on your ability to do math.</p>
            <hr style={{borderTop: '3px solid #355c7d', width: '65%', marginLeft:'170px'}}/>
            <h5 style={{textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold',marginRight:'-100px',marginLeft:'50px'}}>Address</h5>
            <p style={{textAlign: 'center', fontFamily:'Modern Antiqua', fontSize:'20px', marginRight:'-100px',marginLeft:'50px'}}>410 Vine Street, St Joseph, MI 49085</p>
            <h5 style={{textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold',marginRight:'-100px',marginLeft:'50px'}}>Phone</h5>
            <p style={{textAlign: 'center', fontFamily:'Modern Antiqua', fontSize:'20px', marginRight:'-100px',marginLeft:'50px'}}>(269) 983-4722</p>
            <h5 style={{textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-100px',marginLeft:'50px'}}>Email</h5>
            <p style={{textAlign: 'center', fontFamily:'Modern Antiqua', fontSize:'20px', marginRight:'-100px',marginLeft:'50px'}}>colin_clark@yahoo.com</p>
            <h5 style={{textAlign: 'center', fontFamily:'Vollkorn', fontWeight:'bold', marginRight:'-100px',marginLeft:'50px'}}>Web</h5>
            <p style={{textAlign: 'center', fontFamily:'Modern Antiqua', fontSize:'20px', marginRight:'-100px',marginLeft:'50px'}}>ColinClark.com</p>
            <hr style={{borderTop: '3px solid #355c7d', width: '65%', marginLeft:'170px'}}/>
          </Cell>
          <Cell className="resume-right-col" col={7} style={{marginLeft:'120px'}}>
            <h2>Education</h2>

            <Education
              startYear={1998}
              endYear={2002}
              schoolName="College, Michigan State University"
              schoolDescription="Bachelor of Science Major in Mathematics, Bachelor of Arts In Secondary Education"
               />

               <Education
                 startYear={1997}
                 endYear={1998}
                 schoolName="High School, Hartford High School"
                 schoolDescription="Math Olympiad Champion 1997-1998, Student Council President, Valedictorian (4.0 GPA)"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2004}
              endYear={2006}
              jobName="St. Joseph High School, St. Joseph, MI"
              jobDescription="Handled mathematics classes including Introduction to Calculus and Introduction to Trigonometry, as well as Geometry and Algebra classes
              ; Implemented stimulating lessons to engage students’ attention and interest, allowing them to develop a passion for the subjects"
              />

              <Experience
                startYear={2006}
                endYear={2012}
                jobName="Hastings High School, Hastings, MI"
                jobDescription="Taught three mathematic sections including Statistics, Trigonometry, and Statistics;
                Created comprehensive lesson plans incorporating various methods of teaching to ensure pupils are actively engaged and understand the materials"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Algebra and Trigonometry"
                progress={100} 
                />
                <Skills
                  skill="Differential Equations"
                  progress={80}
                  />
                  <Skills
                    skill="Modern Geometry"
                    progress={50}
                    />
                    <Skills
                      skill="Matrix Algebra"
                      progress={25}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
