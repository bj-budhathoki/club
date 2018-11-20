import React, { Component } from "react";
import { easePolyOut, easeBounceIn } from "d3-ease";
import Animate from "react-move/Animate";
import FeaturedPlayer from "../../../Resources/images/featured_player.png";
class Text extends Component {
  animateNumber = () => (
    <Animate
      start={{
        opacity: 0,
        rotate: 0
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1500, ease: easePolyOut, delay: 700 }
      }}
      show={true}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: ` translate(30.5rem,8rem) rotateY(${rotate}deg)`
            }}
          >
            3
          </div>
        );
      }}
    </Animate>
  );
  animateFirst = () => (
    <Animate
      start={{
        opacity: 0,
        x: 530,
        y: 308
      }}
      enter={{
        opacity: [1],
        x: [320],
        y: [308],
        timing: { duration: 500, ease: easePolyOut, delay: 300 }
      }}
      show={true}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_first"
            style={{
              opacity,
              transform: ` translate(${x}px,${y}px)`
            }}
          >
            League
          </div>
        );
      }}
    </Animate>
  );
  animateSecond = () => (
    <Animate
      start={{
        opacity: 0,
        x: 503,
        y: 430
      }}
      enter={{
        opacity: [1],
        x: [320],
        y: [430],
        timing: { duration: 500, ease: easePolyOut, delay: 500 }
      }}
      show={true}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_second"
            style={{
              opacity,
              transform: ` translate(${x}px,${y}px)`
            }}
          >
            Chapionships
          </div>
        );
      }}
    </Animate>
  );
  animatePlayer = () => (
    <Animate
      start={{
        opacity: 0,
        x: 503,
        y: 430
      }}
      enter={{
        opacity: [1],

        timing: { duration: 800, ease: easeBounceIn, delay: 800 }
      }}
      show={true}
    >
      {({ opacity }) => {
        return (
          <div
            className="featured_player"
            style={{
              opacity,
              background: `url(${FeaturedPlayer})`,
              transform: ` translate(610px,201px)`
            }}
          />
        );
      }}
    </Animate>
  );
  render() {
    return (
      <div className="featured_text">
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    );
  }
}
export default Text;
