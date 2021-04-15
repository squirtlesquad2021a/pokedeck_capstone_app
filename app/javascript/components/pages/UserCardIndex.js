
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';


class UserCardIndex extends Component {
    render() {
        // const { card_data } = this.props.usersBinders
        
        return (
            <>
                <h2>These are your cards</h2>
                <CardDeck>

                        {this.props.usersBinders && this.props.usersBinders.map(binder => {
                             let { card_data } = binder 
                            return (
                                <Card bodykey={card_data.id}>
                                    <NavLink
                                        to={`/bindershow/${card_data.id}`}>
                                            {card_data.name}
                                        <CardImg top width="100%" src={card_data.image} alt="Card image" />       
                                    </NavLink>
                                </Card>
                            )
                        })}

                   </CardDeck>
            </>
        )
    }
}




export default UserCardIndex