import React, { Component } from "react"
import { Table } from 'reactstrap';

const Rankings = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Deck Price</th>
          <th>Most Valuable Card</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Rankings;

{this.props.cards && this.props.cards.map((card, index) => {
    return (
  <Card body key = {index}>
      <NavLink to={`/cardshow/${card.id}`}>