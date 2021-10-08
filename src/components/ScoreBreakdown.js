import React from "react";
import { Alert } from "react-bootstrap";
import "../styles/ScoreBreakdown.css";

const colorSuggestion = (text) => {
  if (text === "Above average") {
    return <p style={{ color: "red" }}>{text}</p>;
  } else if (text === "Average") {
    return <p style={{ color: "yellow" }}>{text}</p>;
  } else if (text === "Below average") {
    return <p style={{ color: "green" }}>{text}</p>;
  }
};

export default function ScoreBreakdown(props) {
  // Suggestions
  // props.suggestions
  // props.food
  // props.transport
  // props.fights
  // props.house
  return (
    <div>
      <Alert show={true} variant="info" className="Alert">
        <Alert.Heading className="AlertHeading">
          General Information
        </Alert.Heading>
        <hr />
        <p>
          Your score is a value between <code>0 and 100</code>, where a value of
          <code> 50</code> represents the average person in your country, less
          than <code>50</code> is better than average and more than{" "}
          <code>50</code> is worse than average.
        </p>
        <p>
          The following section is a breakdown of your score with suggestions
          for being more environmentally conscious.
        </p>
        <br />
        <p>
          <b>Please Note: </b> Your score may not be a perfect representation of
          your carbon footprint, especially if you live in a less economically
          developed country due to the lack of data collected about said
          countries.
        </p>
      </Alert>
      <br />
      <p className="title">This is your score breakdown</p>
      <hr />
      Your food carbon emissions are: {colorSuggestion(props.suggestions[0])}
      <br />
      Your home's carbon emissions are: {colorSuggestion(props.suggestions[1])}
      <br />
      Your transport carbon emissions are:{" "}
      {colorSuggestion(props.suggestions[2])}
      <br />
      The carbon emissions for your energy are:{" "}
      {colorSuggestion(props.suggestions[3])}
      <br />
      Your carbon emissions from your flights are:{" "}
      {colorSuggestion(props.suggestions[4])}
    </div>
  );
}
