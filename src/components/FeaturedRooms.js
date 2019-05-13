import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms: rooms } = this.context;
    let featuredRooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    // console.log("Featured rooms", rooms);

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRooms }
        </div>
      </section>
    );
  }
}
