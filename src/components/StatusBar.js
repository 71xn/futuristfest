import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../styles/StatusBar.css";

// This returns a status bar that indicated carbon footprint based on a value between 0 and 1
// 0 is very good and 1 is very bad

export default function StatusBar(props) {
  function calculateVal(v) {
    console.log(v);
    return v * 100;
  }

  function variantCheck(v) {
    if (v < 0.4) {
      return "success";
    } else if (v > 0.4 && v < 0.69) {
      return "warning";
    } else if (v >= 0.7) {
      return "danger";
    }
  }

  function scoreCheck(v) {
    if (v < 0.4) {
      return <large style={{ color: "green" }}>Excellent</large>;
    } else if (v > 0.4 && v < 0.69) {
      return <large style={{ color: "yellow" }}>Average</large>;
    } else if (v >= 0.7) {
      return <large style={{ color: "red" }}>Bad</large>;
    }
  }

  function percentageCalc(v) {
    return Math.round(v * 100);
  }

  function goalCheck(v) {
    if (v >= 0.6) {
      return <big style={{ color: "green" }}> {v * 100}%</big>;
    } else if (v < 0.6 && v > 0.3) {
      return <big style={{ color: "yellow" }}> {v * 100}%</big>;
    } else if (v < 0.3) {
      return <big style={{ color: "red" }}> {v * 100}%</big>;
    }
  }

  return (
    <div>
      <ProgressBar
        variant={variantCheck(props.value)}
        now={calculateVal(props.value)}
        label={"Score : " + Math.round(100 * props.value) + " out of 100"}
      />
      <br />
      <p className="center">
        {" "}
        {scoreCheck(props.value)} - Your annual CO2 emissions is: ≈{" "}
        {props.totalEmissions} tonnes.
      </p>
      <br />
      <p>
        <big>
          You are {goalCheck(percentageCalc(props.goalScore) / 100)} of the way
          to meeting the carbon emissions target of 2030 which is {props.goal}{" "}
          tonnes of CO2.
        </big>
      </p>
      <ProgressBar
        variant={variantCheck(1 - props.goalScore)}
        now={calculateVal(props.goalScore)}
        label={"Score : " + Math.round(100 * props.goalScore) + " out of 100"}
      />
      {/* How your footprint compares with where you should be by 2030 */}
      <br />
    </div>
  );
}
