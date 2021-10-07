import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FloatingLabel, ThemeProvider } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import StatusBar from "./StatusBar";
import ScoreBreakdown from "./ScoreBreakdown";

// This is the form that handles the data needed for the environmental footprint calculation

export default function EnvForm() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [footprint, setFootprint] = useState(0.1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // This request is for testing as of right now, all of the params will be used in the future
    console.log(data);
    const apiURL =
      "https://futuristfest.herokuapp.com//env-data/?" +
      "house2=" +
      data.House2;
    const request = await fetch(apiURL);
    const apiData = await request.json();
    console.log(apiData);
    setFootprint(apiData.footprintScore);
  };
  console.log(errors);

  return (
    <div>
      <br />
      <br />
      <br />
      <b>
        {" "}
        <u>Carbon Footprint Calculator</u>
      </b>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            {...register("Name", { required: true })}
          />
          <Form.Text className="text-muted">
            We'll never share your data with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Label>Country</Form.Label>
        <Form.Select
          aria-label="Floating label select example"
          {...register("Country", { required: true })}
        >
          <option>Please choose a country</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
        </Form.Select>
        <br />
        <br />
        <b> Food </b>
        <hr />
        <Form.Label>How often do you eat meat?</Form.Label>
        <Form.Select {...register("Food1", { required: true })}>
          <option>Please choose an option </option>
          <option value="1">Once per meal</option>
          <option value="2">Once per day</option>
          <option value="3">A couple of times per week</option>
          <option value="4">Once per week</option>
          <option value="5">Pescytarian</option>
          <option value="6">Vegetarian</option>
        </Form.Select>
        <br />
        <Form.Label>
          What percentage of your food is sourced locally?
        </Form.Label>

        <Slider
          defaultValue={0}
          min={0}
          max={100}
          step={5}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          disabled={check1}
          {...register("Food2", { required: false })}
        />

        <Form.Check
          label="Not sure"
          checked={check1}
          onChange={(e) => {
            setCheck1(e.target.checked);
          }}
        />

        <br />
        <br />
        <b> Transportation </b>
        <hr />
        <Form.Label>What is your primary mode of transport?</Form.Label>
        <Form.Select {...register("Transport1", { required: true })}>
          <option>Please choose an option </option>
          <option value="1">Foot / Bike</option>
          <option value="2">Motorbike / Moped</option>
          <option value="3">Car / Other personal vehicle</option>
          <option value="4">Private Helicopter</option>
          <option value="5">Public Transport</option>
        </Form.Select>
        <br />
        <p>
          <b>In the past year, how many round-trip flights have you taken?</b>
        </p>
        <Form.Label>Domestic</Form.Label>
        <Slider
          defaultValue={0}
          min={0}
          max={20}
          step={1}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          {...register("Flights1", { required: false })}
        />
        <Form.Label>Up to 1250km away</Form.Label>
        <Slider
          defaultValue={0}
          min={0}
          max={20}
          step={1}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          {...register("Flights2", { required: false })}
        />

        <Form.Label>Up to 2500km away</Form.Label>
        <Slider
          defaultValue={0}
          min={0}
          max={20}
          step={1}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          {...register("Flights3", { required: false })}
        />
        <Form.Label>Up to 5500km away</Form.Label>
        <Slider
          defaultValue={0}
          min={0}
          max={20}
          step={1}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          {...register("Flights4", { required: false })}
        />
        <Form.Label>Up to 9000km away</Form.Label>
        <Slider
          defaultValue={0}
          min={0}
          max={20}
          step={1}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          {...register("Flights5", { required: false })}
        />
        <Form.Label>Up to 17500km away</Form.Label>
        <Slider
          defaultValue={0}
          min={0}
          max={20}
          step={1}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          {...register("Flights6", { required: false })}
        />
        <Form.Label>Up to 17500km away</Form.Label>
        <br />
        <br />
        <Form.Check
          label="Do you own a private jet?"
          {...register("Flights7", { required: false })}
        />

        <br />
        <br />
        <b> Household </b>
        <hr />
        <Form.Label>What type of house do you live in?</Form.Label>
        <Form.Select {...register("House1", { required: false })}>
          <option>Please choose an option </option>
          <option value="1">Detached/Single-family home</option>
          <option value="2">Semi-detached home</option>
          <option value="3">Low-occupancy apartments</option>
          <option value="4">High-occupancy apartments</option>
        </Form.Select>

        <br />
        <Form.Label>What percentage of your energy mix is green?</Form.Label>
        <Slider
          defaultValue={0}
          min={0}
          max={100}
          step={5}
          marks
          aria-label="default"
          valueLabelDisplay="auto"
          disabled={check2}
          {...register("House2", { required: false })}
        />

        <Form.Check
          label="Do not know?"
          checked={check2}
          onChange={(e) => {
            setCheck2(e.target.checked);
          }}
        />

        <br />
        <Form.Label>
          To what extent is your home equipped with energy-saving improvements?
          e.g. Smart Meters, Efficient Boilers etc.
        </Form.Label>
        <Form.Select {...register("House3", { required: false })}>
          <option>Please choose the statement that fits the best</option>
          <option value="1">
            I have many energy-saving improvements in my home
          </option>
          <option value="2">
            I have a couple of energy-saving improvements in my home
          </option>
          <option value="3">
            I have no energy-saving improvements in my home
          </option>
          <option value="0">Do not know</option>
        </Form.Select>
        <br />
        <Form.Label>How many adults live in your household?</Form.Label>
        <Form.Select {...register("House4", { required: false })}>
          <option>Please choose the number that fits the best</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </Form.Select>

        <br />
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
        <br />
      </Form>
      <div>
        <p>
          <big>Your carbon footprint score is . . .</big>
        </p>
        <StatusBar value={footprint} />
      </div>
      <br />
      <ScoreBreakdown />
      <br />
      <br />
      <br />
    </div>
  );
}
