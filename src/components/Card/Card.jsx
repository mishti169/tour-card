import React, { Component } from "react";

class Card extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        <img width={620} height={320} src={item.image} alt={item.name} />
        <div>
          <div>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
          <p>{item.info}</p>
          <span>Not Interested</span>
        </div>
      </div>
    );
  }
}
export default Card;
