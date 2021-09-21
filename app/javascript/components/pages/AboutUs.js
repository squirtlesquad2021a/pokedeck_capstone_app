
import React, { useState } from 'react';
import { Media } from 'reactstrap';
import ProfilePic from '../../../assets/images/ProfilePic.jpeg'

const AboutUs = (props) => {

  return (
    <>
    <div className='browseCardsDiv'>
    <h3 className="center">Get To Know the Team</h3>
    </div>
    <div>
      <Media className="mt-1">
        <Media left top href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="Charizard" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Guerrero Campos (Design Lead) -
          </Media>
          As the Design Lead of the project, I understand the importance of UI/UX needs of an application. I applied my love for music and knew how important it was to have some sort of introduction music upon opening the site to help get the user in the “Pokemon” mind state, and pull them into the world of Pokedeck. Growing up I collected Pokemon cards and carried those heavy binders everywhere where I went. But that was then, and times have changed and technology has evolved from when I was a kid and so this application is for all the Pokemon card enthusiasts and for all future Pokemon card collectors.<p><a href="https://www.linkedin.com/in/guerrero-campos/">checkout my LinkedIn</a></p>
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif" alt="Squirtle" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Allen Tan (Product Manager) -
          </Media>
          As Product Manager, I had to take ownership of the vision of the overall product, helping the team get through blockers, and ensuring that requirements were met. Growing up, I was obsessed with all things Pokemon, including the anime, the games, and especially the trading card game. When I was nine, I got my first pack of Pokemon cards, which happened to contain a first-edition Venasaur!<p><a href="https://www.linkedin.com/in/allen-tan/"> Checkout myLinkedIn</a></p>
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/shiny/haunter.gif" alt="Haunter" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
          Fernando Romero (Project Manager) -
          </Media>
          As the project manager I was able to motivate the team to keep on track with assigned portions of the project. I was  able to effectively communicate with current trello board information and updated information on which developers were assigned to the card. With input on external resources and development README file. <p><a href="https://www.linkedin.com/in/fernando-r-odnanref/">Checkout my LinkedIn</a></p>
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif" alt="Poliwrath" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Lex Peterson (Technical Lead) -
          </Media>
          As Technical Lead of the team, I had to have a deep understanding of our code base and the technical needs of our project. My responsibilities included version control management and helping prepare for and guide our mentorship sessions.  Ever since I received my older cousin’s card doubles as a kid I’ve been a Pokemon fan, and getting to apply my coding skills while revisiting all my favorite Pokemon made for a fun and engaging project experience.  Coming from a mechanical engineering background with a Bachelor’s degree from Baylor University, I enjoyed encountering unique problems and learning to develop interesting solutions. <p><a href="https://www.linkedin.com/in/lex-peterson/">Checkout my LinkedIn</a></p>
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif" alt="Dragonite" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Erik (Mentor)
          </Media>
          Honorable mention to our mentor Erik who always gave clarity to our project and helped with all road blocks that came across. Gave invaluable resources to help guide us not only in this project but in all future projects. Erik is currently a full stack engineer at ZEAL. Like his favorite pokemon Dragonite, Erik selflessly rescued us while we were lost in the sea of our application. 
        </Media>
      </Media>
      <br></br>
      <br></br>
      <p className= "center">Checkout how this project came together on <a href="https://github.com/squirtlesquad2021a/pokedeck_capstone_app">Github</a></p>
    </div>
    </>
  );
}

export default AboutUs;
