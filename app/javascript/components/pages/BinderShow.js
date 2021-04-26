import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';


class BinderShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      favorite: props.binder.favorite,
    }
  }
  handleClick = (event) => {
    // let checked = this.state.favorite
    console.log('handleClick was called')
    this.setState({ favorite: event.target.checked })
}

  componentDidUpdate(prevProps, prevState){
    console.log('prevState favorite', prevState.favorite)
    console.log('current favorite', this.state.favorite)
    if (prevState.favorite !== this.state.favorite) {
      this.props.updateBinder(this.state, this.props.binder.id)
    }
  }

  render() {

    const card = this.props.binder.card_data;
    // console.log(this.state.favorite)

    return (
      <>
        { card &&
        <>
        <div className = "center"> 
            <h1>{card.name}</h1>
            <br></br>
            <img src= {card.image} alt="sleeve Image" width="25%" height="25%"></img> 
            <div>Name: {card.name}</div>
            <div>Type: {card.pokemon_type}</div>
            <div>Rarity: {card.rarity}</div>
            <div>Price: {card.price}</div>
            <div>Quantity: {this.props.binder.quantity}</div>

            <Form>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" checked={this.state.favorite} onChange= {this.handleClick} id="exampleCustomCheckbox" label="Favorite card " />
                </div>
              </FormGroup>
            </Form>
        </div>
        </>
        }
        { !card &&
        <>
          <Router>
            <Switch>
              <Route component={ NotFound }/>
            </Switch>
          </Router>
          </>
        }
      </>
    )
  }
}
export default BinderShow