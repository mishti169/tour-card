import React, { Component } from "react";
import Card from "../Card/Card";
import axios from "axios";

class TourCard extends Component {
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
    return (
      <div>
        <div>Our Tour</div>
        {["1", 1]}
        {this.state.data.map(function (currItem) {
          return <Card item={currItem} />;
        })}
      </div>
    );
  }
}
export default TourCard;
