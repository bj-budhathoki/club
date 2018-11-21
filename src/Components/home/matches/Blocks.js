import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { Slide } from "react-reveal";
// import { firebaseLooer, reverseArray } from "../../ui/misc";

import MatchesBlocks from "../../ui/matches_blocks";
export class Blocks extends Component {
  state = {
    matches: []
  };
  componentDidMount() {
    firebaseMatches
      .limitToLast(8)
      .once("value")
      .then(snapshot => {
        this.setState({ matches: snapshot.val() });
      });
  }
  showMatches = matches =>
    matches
      ? matches.map((match, i) => (
          <Slide key={i} bottom>
            <div className="item">
              <MatchesBlocks match={match} />
            </div>
          </Slide>
        ))
      : null;
  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
