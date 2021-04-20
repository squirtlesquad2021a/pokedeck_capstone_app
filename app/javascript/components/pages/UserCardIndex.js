
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col
  } from 'reactstrap';


class UserCardIndex extends Component {
    render() {
        // const { card_data } = this.props.usersBinders
    
        return (
            <>
                <h2 className="center">These are your cards</h2>
                <Row xs="4">

                        {this.props.usersBinders && this.props.usersBinders.map(binder => {
                            let { card_data } = binder 
                            return (
                            <Col>
                                <Card key={card_data.id}>
                                    <NavLink to={`/bindershow/${binder.id}`}>
                                        <CardImg top width="100%" src={card_data.image} alt="Card image" />       
                                    </NavLink>
                                </Card>
                                <br></br>
                                <br></br>
                            </Col>
                            )
                        })}
                </Row>
            </>
        )
    }
}




export default UserCardIndex