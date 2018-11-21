import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Otamendi from "../../../Resources/images/players/Otamendi.png";
import sterling from "../../../Resources/images/players/Raheem_sterling.png";
import kompany from "../../../Resources/images/players/Vincent_kompany.png";
import PlayerCard from "../../ui/PlayerCard";
export class Cards extends Component {
  state = {
    show: this.props.show,
    cards: [
      {
        bottom: 90,
        left: 300,
        background: Otamendi,
        name: "Nicolas",
        lastname: "Otamendi",
        number: "30"
      },
      {
        bottom: 60,
        left: 200,
        background: sterling,
        name: "Raheem",
        lastname: "sterling",
        number: "7"
      },
      {
        bottom: 0,
        left: 0,
        background: kompany,
        name: "Vincent",
        lastname: "kompany",
        number: "2"
      }
    ]
  };
  animateCards = () =>
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{ left: 0, bottom: 0 }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          background: [card.background],
          name: [card.name],
          lastname: [card.lastname],
          number: [card.number],
          timing: { duration: 500, ease: easePolyOut }
        }}
      >
        {({ left, bottom, background, name, lastname, number }) => (
          <div style={{ position: "absolute", left, bottom }}>
            <PlayerCard
              number={number}
              name={name}
              lastname={lastname}
              bck={background}
            />
          </div>
        )}
      </Animate>
    ));
  render() {
    return <div>{this.animateCards()}</div>;
  }
}

export default Cards;
