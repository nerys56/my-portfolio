import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from './NavBar'
import "./MyBumpyTechJourney.css";

const MyBumpyTechJourney = () => {
  return (
    <>
    <Container fluid className="full-width-container background-color">
      <Menu />
      <div className="artcile-bg">
        <div className="article-title">
          <h1 className="title">My (bumpy*) journey into tech</h1>
          <p className='sub-heading'>August 2023</p>
        </div>
      </div>
      
    
    </Container>
    <Container>
      <div className='article'>
        <p>At the beginning of the year, I embarked on an incredible journey with Code First Girls and
    Chwarae Teg.<br/><br/>
    For anyone who doesn't know, Code First Girls and Chwarae Teg give women an incredible
    platform to jump-start their careers in the ever so male-dominated tech sector. I've worked
    alongside developers for 15 years and not one of them was female. Chwarae Teg are my
    amazing sponsors and Code First Girls run the brilliant courses.<br/><br/>

    The course was a full-stack micro degree. Condensed over three months, two hours a day,
    four days a week while holding down a full-time job. I learnt languages like Python
    (we weren't friends), MYSQL, JavaScript, Typescript, React, HTML, CSS and front-end frameworks like
    Bootstrap and MUI.<br/><br/>

    I've always been driven towards front-end development having some experience in the field,
    mostly building WordPress websites up until now. Nothing against WordPress, it's a good
    choice for clients who want to manage their own content, but my aim was to build something
    lightweight and functional, from scratch and with no plugins!<br/><br/>

    By the end of the course, I walked away with so much knowledge, a merit, new friends and
    an incredible new opportunity I had been waiting years for.<br/><br/>

    I started my new role as a junior software engineer at a company in Cardiff. I'd been self-
    employed for ten years and was looking forward to working with a team of people again. The
    job was great, the people were brilliant. The code base was confusing at first, but after a few
    weeks I got involved in some tickets and felt like a sponge soaking up all the new
    information. Learning from the best tech professionals around and enjoying the daily stand-
    ups, sprints and two-weekly retrospectives.<br/><br/>

    Here comes the plot twist…<br/><br/>

    After six weeks, due to business-wide redundancies, my time with the company was cut
    short, and so too my hopes of becoming a software engineer.<br/><br/>

    Leaving the office with mixed emotions, but mainly huge disappointment, I walked into
    Cardiff's busy Queen Street wondering if I could stomach lunch.<br/><br/>

    At that precise moment (call it fate), an old lady approached me. She asked for directions to
    the bus station. Anyone who knows me knows about my dreadful sense of direction. I'm still
    struggling to get around my hometown after 30 years!<br/>
    <br/>
    Heading towards the bus station myself, I offered to walk her there. Carrying her blue bag
    full of shopping from the fruit and veg man, I couldn't help thinking, you can't make this up!
    Within five minutes, I learned that she'd owned a farm in Devon. They'd kept pigs but had to
    get rid of them because they kept attacking her brother. Apparently, pigs are highly
    intelligent but can be aggressive (every day's a school day!).<br/><br/>
    
    Arriving at the bus station, I wished her a safe journey and walked away. As I did I realised
    that by sharing a human moment with me in the middle of a city where it’s easy to feel lost,
    that by giving me a sense of connection at the time I needed it most, the old lady had helped
    me just as much as I helped her.<br/><br/>

    I can't fault the support I've received since. Not only from my amazing sponsors and Code
    First Girls, but the company themselves. They've helped me so much, it's been truly
    humbling.<br/><br/>

    So, what's next?<br/><br/>

    I'll keep fighting for a place in the tech industry so I can learn from leading tech professionals
    and pave my way into a career that I want to succeed in. Don't get me wrong, my passion for
    graphic design will always be part of me, but together design and tech make a powerful
    couple.<br/><br/>

    Until then, feast your eyes on my lovely new website, built with all my new-found skills.
    Thank you for reading, and if you'd like to work with me, I'd love to hear from you.</p>
    </div>
    </Container>
    </>
  )
}

export default MyBumpyTechJourney