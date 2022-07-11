import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
  state = {
    data: [],
  };
  async getTourInfo() {
    const { data } = await axios.get(
      "https://course-api.com/react-tours-project"
    );
    this.setState({ data });
  }
  componentDidMount() {
    this.getTourInfo();
  }

  render() {
    return this.state.data.map(function (item) {
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
    });
  }
}
export default Card;
