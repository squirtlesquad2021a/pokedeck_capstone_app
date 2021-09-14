import React, { Component } from "react"
import { Table } from 'reactstrap';


class Rankings extends Component{
  render() {
      console.log(this.props.rankings)
      const {
          logged_in,
          sign_in_route,
          sign_out_route,
          new_user_route
        } = this.props
  return (
    <>
    <div className='browseCardsDiv'>
        <h2 className="center">See How you Stack Up!</h2>
        </div>
    <Table hover className='rankingTable'>
      <thead>
        <tr>
          <th className="rankingsColumnText">#</th>
          <th className="rankingsColumnText">Username</th>
          <th className="rankingsColumnText">Deck Price</th>
          <th className="rankingsColumnText">Most Valuable Card</th>
        </tr>
      </thead>
      <tbody>
      {this.props.rankings && this.props.rankings.map((ranking, index) => {
        // let {ranking_data } = ranking 
        return (

        <tr key = {index} className='rankingList'>
          <td>{index + 1 }</td>
          <td>{ranking.username}</td>
          <td>{ranking.deck_price}</td>
          <td>{ranking.most_valuable_card}</td>
        </tr>
      )})}
      </tbody>
    </Table>
    </>
  );
}
}

export default Rankings;

