import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { name, greeting } = this.context;
    console.log();
    return <div>hello {name} featured rooms </div>;
  }
}
