import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(book.jpg) center / cover'}} >#1 The power of fiction</CardTitle>
            <CardText>
            Listening to stories widens the imagination; telling them lets us leap over cultural walls, 
            embrace different experiences, feel what others feel. Elif Shafak builds on this simple idea
             to argue that fiction can overcome identity politics.
            </CardText>
            <CardActions border>
              <Button colored>Ted Talk</Button>
              <Button colored>Read Article</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(door.jpg) center / cover'}} >#2 Why a good book is a secret door</CardTitle>
            <CardText>
            Childhood is surreal. Why shouldn't children's books be? In this whimsical talk, award-winning author 
            Mac Barnett speaks about writing that escapes the page, art as a doorway to wonder --
           and what real kids say to a fictional whale.
            </CardText>
            <CardActions border>
              <Button colored>Ted Talk</Button>
              <Button colored>Read article</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(mind.jpg) center / cover'}} >#3 How books can open our mind</CardTitle>
            <CardText>
            What happens when a dream you've held since childhood ... doesn't come true? 
            As Lisa Bu adjusted to a new life in the United States, she turned to books to expand her
             mind and create a new path for herself.
            </CardText>
            <CardActions border>
              <Button colored>Ted Talk</Button>
              <Button colored>Read Article</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(girl.jpg) center / cover'}} >#4 Finding the story inside the painting</CardTitle>
            <CardText>
            When Tracy Chevalier looks at paintings, she imagines the stories behind them: How did the painter meet
             his model? What would explain that look in her eye? Why is that man ... blushing? 
            </CardText>
            <CardActions border>
              <Button colored>Ted Talk</Button>
              <Button colored>Read Article</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } 
    // Math 
    else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(algoritmjpg.jpg) center / cover'}} >#1 The influence of algorithms</CardTitle>
          <CardText>
          Algorithms play a big part in our day-to-day lives. From search engines to architecture, 
          explore how these formulas affect...
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 2 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(math.jpg) center / cover'}} >#2 Math talks to blow your mind</CardTitle>
          <CardText>
          Numbers, patterns and equations are at the core of these talks, which will teach 
          you how to fold better origami and how to quantify history.
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(love.jpg) center / cover'}} >#3 Math in unexpected places</CardTitle>
          <CardText>
          These talks are here to set the record straight and illuminate the unexpected ways formulas and fractions
           influence everything...
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(second.jpg) center / cover'}} >#4 A love poem for lonely prime numbers</CardTitle>
          <CardText>
          Performance poet (and math student) Harry Baker spins a love poem about his favorite kind of numbers
           -- the lonely, love-lorn prime. 
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } 
    // Biology
    else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(dna.jpg) center / cover'}} >#1 How does DNA works?</CardTitle>
          <CardText>
          Your DNA makes you, you -- but how does it work? These talks explore what we know about
           the genome, the unique genetic sequence that makes up life as we know it.
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 2 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(brain.jpg) center / cover'}} >#2 The complexity of memory</CardTitle>
          <CardText>
          The mind is a diligent recorder, taking note of all that happens and storing data on it for retrieval later, 
          right? Well actually, no. Enjoy these 7 illuminating talks on the science...
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(leaf.jpg) center / cover'}} >#3 Beautiful tricks of flowers</CardTitle>
          <CardText>
          In this visually dazzling talk, Jonathan Drori shows the extraordinary ways flowering plants -- 
          over a quarter million species -- have evolved to attract insects to spread their pollen...
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(bio.jpg) center / cover'}} >#4 Reconnect with nature</CardTitle>
          <CardText>
          Be inspired to go out and rediscover the wonders of the natural world with these talks
           that will give you a deeper understanding of where the wild things grow.
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } 
    // Physics
    else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(einstein.jpg) center / cover'}} >#1 The fascinating physics of evertday life</CardTitle>
          <CardText>
          Physics doesn't just happen in a fancy lab -- it happens when you push a piece of 
          buttered toast off the table or drop a couple of raisins in a fizzy drink or watch a
           coffee spill dry.
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 2 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(sphere.jpg) center / cover'}} >#2 Making sense of a visible quantum object</CardTitle>
          <CardText>
          Physicists are used to the idea that subatomic particles behave according to the bizarre rules of quantum mechanics, 
          completely different to human-scale objects. 
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 3 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(circuit.jpg) center / cover'}} >#3 An 8-dimensional model of the universe</CardTitle>
          <CardText>
          Physicist and surfer Garrett Lisi presents a controversial new model of the universe
           that -- just maybe -- answers all the big questions.
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

         {/* Project 4 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '176px', background: 'url(physics.jpg) center / cover'}} >#4 Just how small is an atom</CardTitle>
          <CardText>
          Just how small are atoms? Really, really, really small. This fast-paced animation from TED-Ed uses metaphors
          </CardText>
          <CardActions border>
            <Button colored>Ted Talk</Button>
            <Button colored>Read Article</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }

  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Literature</Tab>
          <Tab>Math</Tab>
          <Tab>Biology</Tab>
          <Tab>Physics</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
