
import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row, Col, CardColumns
  } from 'react-bootstrap';
class Home extends Component{
  
  render() {
    const {
        logged_in,
        sign_in_route,
        sign_out_route,
        new_user_route
      } = this.props
    return(
      <>
        <h2 className="center">Browse cards</h2>
        <Container fluid>
            <Row>
              {this.props.cards && this.props.cards.map((card, index) => {
                return (
                  <Col md="3" xs="16" key = {index} >
                    <Card key = {index} className="cards">
                        <NavLink to={`/cardshow/${card.id}`}>
                          <CardImg width="100%" src={card.image} alt="Card image" />
                        </NavLink>
                    </Card>
                    <br></br>
                    <br></br>
                </Col>
                )
              })}
            </Row>
        </Container>
      </>
    )
  }
}
  
export default Home