import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Welcome extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="image"
            src="https://images.wallpaperscraft.com/image/people_jump_happiness_beach_shadow_image_11066_1280x720.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://www.fabhotels.com/blog/wp-content/uploads/2018/11/600x400-8-1280x720.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="image"
            src="https://www.revv.co.in/blogs/wp-content/uploads/2020/07/road-trip-songs-1280x720.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
