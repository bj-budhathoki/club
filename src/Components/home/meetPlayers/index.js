import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import Stripes from "../../../Resources/images/stripes.png";

import { Tag } from "../../ui/misc";
import Cards from "./Cards";
export class MeetPlayers extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#fff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <Cards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <Tag
                  bck="#0e1731"
                  size="10rem"
                  color="#FFF"
                  add={{ display: "inline-block", marginBottom: "20px" }}
                >
                  meet
                </Tag>
                <Tag
                  bck="#0e1731"
                  size="9rem"
                  color="#FFF"
                  add={{ display: "inline-block", marginBottom: "20px" }}
                >
                  the
                </Tag>
                <Tag
                  bck="#0e1731"
                  size="9rem"
                  color="#FFF"
                  add={{ display: "inline-block", marginBottom: "20px" }}
                >
                  Players
                </Tag>
              </div>
              <div>
                <Tag
                  bck="#FFF"
                  size="27px"
                  color="#0e1731"
                  link={true}
                  linkTo="/the_team"
                  add={{
                    display: "inline-block",
                    marginBottom: "27px",
                    border: "1px solid #0e1731"
                  }}
                >
                  Meet the players
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
