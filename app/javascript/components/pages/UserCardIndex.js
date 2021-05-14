import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col, Container
} from 'reactstrap';
class UserCardIndex extends Component {
    render() {
        return (
            <>
                <h2 className="center">These are your cards</h2>
                <Container fluid>
                    <Row>
                        {this.props.usersBinders && this.props.usersBinders.map((binder, index) => {
                            let { card_data } = binder 
                            return (
                                <Col md="3" xs="16" key= {index}>
                                    <Card key= {index}>
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
                </Container>
            </>
        )
    }
}

export default UserCardIndex