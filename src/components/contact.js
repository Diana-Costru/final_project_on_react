import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 style={{fontFamily:'Abril Fatface'}}>Teaching Portal Group</h2>
            <img
              src="log.png"
              alt="avatar"
              style={{height: '300px'}}
               />
             <p style={{ width: '100%', margin: 'auto', paddingTop: '1em', fontFamily:'Volkorn', fontSize:'20px'}}>Contact us if you have any questions
              we will help you to make all the subjects as clear as possible. Our portal contain 
              all the mainly information that you need to obtain the maximum score on your exam. 
              If you have issues about functionality you can contact us or send an email.
               We are waiting for you!</p>

          </Cell>
          <Cell col={6}>
            <h2 style={{fontFamily:'Abril Fatface'}}>Contact Us</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    teachingportal@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    teaching.portal
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
