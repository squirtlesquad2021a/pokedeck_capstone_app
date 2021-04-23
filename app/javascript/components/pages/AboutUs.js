
import React, { useState } from 'react';
import { Media } from 'reactstrap';
import ProfilePic from '../../../assets/images/ProfilePic.jpeg'

const AboutUs = (props) => {

  return (
    <>
    <h3 className="center">Get To Know the Team</h3>
    <div>
      <Media>
        <Media left top href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="Charizard" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Guerrero Campos
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.<p><a href="https://www.linkedin.com/in/guerrero-campos/">checkout my LinkedIn</a></p>
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif" alt="Squirtle" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Allen Tan
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. <p><a href="https://www.linkedin.com/in/allen-tan/"> Checkout myLinkedIn</a></p>
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/shiny/haunter.gif" alt="Haunter" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Fernando Romero
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. <p><a href="https://www.linkedin.com/in/fernando-r-odnanref/">Checkout my LinkedIn</a></p>
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object src="https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif" alt="Poliwrath" height="100px"/>
        </Media>
        <Media body>
          <Media heading>
            Lex Peterson
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. <p><a href="https://www.linkedin.com/in/lex-peterson/">Checkout my LinkedIn</a></p>
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
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
    </>
  );
}

export default AboutUs;
