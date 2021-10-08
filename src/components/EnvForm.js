import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, ProgressBar, Alert } from "react-bootstrap";
import Slider from "@mui/material/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import StatusBar from "./StatusBar";
import ScoreBreakdown from "./ScoreBreakdown";
import "../styles/EnvForm.css";

// This is the form that handles the data needed for the environmental footprint calculation

// sleep function
const sleepNow = (delay) =>
	new Promise((resolve) => setTimeout(resolve, delay));

export default function EnvForm() {
	const [check1, setCheck1] = useState(false);
	const [check2, setCheck2] = useState(false);
	const [footprint, setFootprint] = useState(0.1);
	const [progress, setProgress] = useState(0);
	const [suggestions, setSuggestions] = useState(["", "", "", "", ""]);
	const [goalScore, setGoalScore] = useState(0);
	const [totalEmissions, setTotalEmissions] = useState(0);
	const [goal, setGoal] = useState(0);
	const [apiDone, setApiDone] = useState(false);

	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		// Separates the parts used in the api request
		const countryParam = "Country=" + data.Country;
		const food1Param = "Food1=" + data.Food1;
		const check1Param = "Check1" + check1;
		const food2Param = "Food2=" + data.Food2;
		const transport1Param = "Transport1=" + data.Transport1;
		const flights1Param = "Flights1=" + data.Flights1;
		const flights2Param = "Flights2=" + data.Flights2;
		const flights3Param = "Flights3=" + data.Flights3;
		const flights4Param = "Flights4=" + data.Flights4;
		const flights5Param = "Flights5=" + data.Flights5;
		const flights6Param = "Flights6=" + data.Flights6;
		const flights7Param = "Flights7=" + data.Flights7;
		const house1Param = "House1=" + data.House1;
		const house2Param = "House2=" + data.House2;
		const house3Param = "House3=" + data.House3;
		const house4Param = "House4=" + data.House4;
		const check2Param = "Check2=" + check2;
		const andChar = "&";

		const url =
			"https://futuristfest.herokuapp.com/env-data/?" +
			countryParam +
			andChar +
			food1Param +
			andChar +
			food2Param +
			andChar +
			check1Param +
			andChar +
			transport1Param +
			andChar +
			flights1Param +
			andChar +
			flights2Param +
			andChar +
			flights3Param +
			andChar +
			flights4Param +
			andChar +
			flights5Param +
			andChar +
			flights6Param +
			andChar +
			flights7Param +
			andChar +
			house1Param +
			andChar +
			house2Param +
			andChar +
			house3Param +
			andChar +
			house4Param +
			andChar +
			check2Param;

		// Progress bar code
		for (let i = 0; i <= 100; i++) {
			setProgress(i);
			await sleepNow(20);
		}

		const request = await fetch(url);
		const apiData = await request.json();
		setFootprint(apiData.footprintScore);

		const food = String(apiData.foodAverage);
		const home = String(apiData.homeAverage);
		const transport = String(apiData.transportAverage);
		const energy = String(apiData.energyAverage);
		const flights = String(apiData.flightsAverage);
		setGoalScore(apiData.goalScore);
		setTotalEmissions(apiData.totalEmissions);
		setSuggestions([food, home, transport, energy, flights]);
		setGoal(apiData.goal);
		setApiDone(true);
	};

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
				<Form.Label>Country *</Form.Label>
				<Form.Select
					aria-label="Floating label select example"
					{...register("Country", { required: true })}
				>
					<option>Please choose a country</option>
					<option value="Afghanistan">Afghanistan</option>
					<option value="Albania">Albania</option>
					<option value="Algeria">Algeria</option>
					<option value="Andorra">Andorra</option>
					<option value="Angola">Angola</option>
					<option value="Antigua and Barbuda">Antigua and Barbuda</option>
					<option value="Argentina">Argentina</option>
					<option value="Armenia">Armenia</option>
					<option value="Australia">Australia</option>
					<option value="Austria">Austria</option>
					<option value="Azerbaijan">Azerbaijan</option>
					<option value="Bahrain">Bahrain</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="Barbados">Barbados</option>
					<option value="Belarus">Belarus</option>
					<option value="Belgium">Belgium</option>
					<option value="Belize">Belize</option>
					<option value="Benin">Benin</option>
					<option value="Bhutan">Bhutan</option>
					<option value="Bolivia">Bolivia</option>
					<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
					<option value="Botswana">Botswana</option>
					<option value="Brazil">Brazil</option>
					<option value="Brunei Darussalam">Brunei Darussalam</option>
					<option value="Bulgaria">Bulgaria</option>
					<option value="Burkina Faso">Burkina Faso</option>
					<option value="Burundi">Burundi</option>
					<option value="Cabo Verde">Cabo Verde</option>
					<option value="Cambodia">Cambodia</option>
					<option value="Cameroon">Cameroon</option>
					<option value="Canada">Canada</option>
					<option value="Central African Republic">
						Central African Republic
					</option>
					<option value="Chad">Chad</option>
					<option value="Chile">Chile</option>
					<option value="China">China</option>
					<option value="Colombia">Colombia</option>
					<option value="Comoros">Comoros</option>
					<option value="Costa Rica">Costa Rica</option>
					<option value="Cote d'Ivoire">Cote d'Ivoire</option>
					<option value="Croatia">Croatia</option>
					<option value="Cuba">Cuba</option>
					<option value="Cyprus">Cyprus</option>
					<option value="Czech Republic">Czech Republic</option>
					<option value="Democratic Republic of the Congo">
						Democratic Republic of the Congo
					</option>
					<option value="Denmark">Denmark</option>
					<option value="Djibouti">Djibouti</option>
					<option value="Dominica">Dominica</option>
					<option value="Dominican Republic">Dominican Republic</option>
					<option value="Ecuador">Ecuador</option>
					<option value="Egypt">Egypt</option>
					<option value="El Salvador">El Salvador</option>
					<option value="Equatorial Guinea">Equatorial Guinea</option>
					<option value="Eritrea">Eritrea</option>
					<option value="Estonia">Estonia</option>
					<option value="Eswatini">Eswatini</option>
					<option value="Ethiopia">Ethiopia</option>
					<option value="Fiji">Fiji</option>
					<option value="Finland">Finland</option>
					<option value="France">France</option>
					<option value="Gabon">Gabon</option>
					<option value="Georgia">Georgia</option>
					<option value="Germany">Germany</option>
					<option value="Ghana">Ghana</option>
					<option value="Greece">Greece</option>
					<option value="Grenada">Grenada</option>
					<option value="Guatemala">Guatemala</option>
					<option value="Guinea">Guinea</option>
					<option value="Guinea-Bissau">Guinea-Bissau</option>
					<option value="Guyana">Guyana</option>
					<option value="Haiti">Haiti</option>
					<option value="Honduras">Honduras</option>
					<option value="Hungary">Hungary</option>
					<option value="Iceland">Iceland</option>
					<option value="India">India</option>
					<option value="Indonesia">Indonesia</option>
					<option value="Iran">Iran</option>
					<option value="Iraq">Iraq</option>
					<option value="Ireland">Ireland</option>
					<option value="Israel">Israel</option>
					<option value="Italy">Italy</option>
					<option value="Jamaica">Jamaica</option>
					<option value="Japan">Japan</option>
					<option value="Jordan">Jordan</option>
					<option value="Kazakhstan">Kazakhstan</option>
					<option value="Kenya">Kenya</option>
					<option value="Kiribati">Kiribati</option>
					<option value="Kuwait">Kuwait</option>
					<option value="Kyrgyz Republic">Kyrgyz Republic</option>
					<option value="Lao PDR">Lao PDR</option>
					<option value="Latvia">Latvia</option>
					<option value="Lebanon">Lebanon</option>
					<option value="Lesotho">Lesotho</option>
					<option value="Liberia">Liberia</option>
					<option value="Libya">Libya</option>
					<option value="Liechtenstein">Liechtenstein</option>
					<option value="Lithuania">Lithuania</option>
					<option value="Luxembourg">Luxembourg</option>
					<option value="Madagascar">Madagascar</option>
					<option value="Malawi">Malawi</option>
					<option value="Malaysia">Malaysia</option>
					<option value="Maldives">Maldives</option>
					<option value="Mali">Mali</option>
					<option value="Malta">Malta</option>
					<option value="Marshall Islands">Marshall Islands</option>
					<option value="Mauritania">Mauritania</option>
					<option value="Mauritius">Mauritius</option>
					<option value="Mexico">Mexico</option>
					<option value="Micronesian Federates States">
						Micronesian Federates States
					</option>
					<option value="Moldova">Moldova</option>
					<option value="Mongolia">Mongolia</option>
					<option value="Montenegro">Montenegro</option>
					<option value="Morocco">Morocco</option>
					<option value="Mozambique">Mozambique</option>
					<option value="Myanmar">Myanmar</option>
					<option value="Namibia">Namibia</option>
					<option value="Nauru">Nauru</option>
					<option value="Nepal">Nepal</option>
					<option value="Netherlands">Netherlands</option>
					<option value="New Zealand">New Zealand</option>
					<option value="Nicaragua">Nicaragua</option>
					<option value="Niger">Niger</option>
					<option value="Nigeria">Nigeria</option>
					<option value="North Macedonia">North Macedonia</option>
					<option value="Norway">Norway</option>
					<option value="Oman">Oman</option>
					<option value="Pakistan">Pakistan</option>
					<option value="Palau">Palau</option>
					<option value="Panama">Panama</option>
					<option value="Papua New Guinea">Papua New Guinea</option>
					<option value="Paraguay">Paraguay</option>
					<option value="Peru">Peru</option>
					<option value="Philippines">Philippines</option>
					<option value="Poland">Poland</option>
					<option value="Portugal">Portugal</option>
					<option value="Qatar">Qatar</option>
					<option value="Republic of Korea">Republic of Korea</option>
					<option value="Republic of the Congo">Republic of the Congo</option>
					<option value="Romania">Romania</option>
					<option value="Russian Federation">Russian Federation</option>
					<option value="Rwanda">Rwanda</option>
					<option value="Samoa">Samoa</option>
					<option value="Sao Tome and Principe">Sao Tome and Principe</option>
					<option value="Saudi Arabia">Saudi Arabia</option>
					<option value="Senegal">Senegal</option>
					<option value="Serbia">Serbia</option>
					<option value="Seychelles">Seychelles</option>
					<option value="Sierra Leone">Sierra Leone</option>
					<option value="Singapore">Singapore</option>
					<option value="Slovak Republic">Slovak Republic</option>
					<option value="Slovenia">Slovenia</option>
					<option value="Solomon Islands">Solomon Islands</option>
					<option value="Somalia">Somalia</option>
					<option value="South Africa">South Africa</option>
					<option value="South Sudan">South Sudan</option>
					<option value="Spain">Spain</option>
					<option value="Sri Lanka">Sri Lanka</option>
					<option value="St. Kitts and Nevis">St. Kitts and Nevis</option>
					<option value="St. Lucia">St. Lucia</option>
					<option value="St. Vincent and the Grenadines">
						St. Vincent and the Grenadines
					</option>
					<option value="Sudan">Sudan</option>
					<option value="Suriname">Suriname</option>
					<option value="Sweden">Sweden</option>
					<option value="Switzerland">Switzerland</option>
					<option value="Syrian Arab Republic">Syrian Arab Republic</option>
					<option value="Tajikistan">Tajikistan</option>
					<option value="Tanzania">Tanzania</option>
					<option value="Thailand">Thailand</option>
					<option value="The Bahamas">The Bahamas</option>
					<option value="The Gambia">The Gambia</option>
					<option value="Timor-Leste">Timor-Leste</option>
					<option value="Togo">Togo</option>
					<option value="Tonga">Tonga</option>
					<option value="Trinidad and Tobago">Trinidad and Tobago</option>
					<option value="Tunisia">Tunisia</option>
					<option value="Turkey">Turkey</option>
					<option value="Turkmenistan">Turkmenistan</option>
					<option value="Tuvalu">Tuvalu</option>
					<option value="Uganda">Uganda</option>
					<option value="Ukraine">Ukraine</option>
					<option value="United Arab Emirates">United Arab Emirates</option>
					<option value="United Kingdom">United Kingdom</option>
					<option value="United States">United States</option>
					<option value="Uruguay">Uruguay</option>
					<option value="Uzbekistan">Uzbekistan</option>
					<option value="Vanuatu">Vanuatu</option>
					<option value="Venezuela, RB">Venezuela, RB</option>
					<option value="Vietnam">Vietnam</option>
					<option value="Yemen">Yemen</option>
					<option value="Zambia">Zambia</option>
					<option value="Zimbabwe">Zimbabwe</option>
				</Form.Select>
				<Form.Text className="text-muted">
					You can type the first letter of your countries name into the dropdown
					to find it faster.
				</Form.Text>
				<br />
				<br />
				<b> Food </b>
				<hr />
				<Form.Label>How often do you eat meat? *</Form.Label>
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
					What percentage of your food is sourced locally? *
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

				<Alert show={true} variant="info">
					To find out more information in regards to local food sourcing, please
					see the following article:{" "}
					<a
						href="https://www.nisbets.co.uk/importance-of-locally-sourced-ingredients"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						here
					</a>
					.
				</Alert>

				<br />
				<br />
				<b> Transportation </b>
				<hr />
				<Form.Label>What is your primary mode of transport? *</Form.Label>
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
				<Form.Label>What type of house do you live in? *</Form.Label>
				<Form.Select {...register("House1", { required: true })}>
					<option>Please choose an option </option>
					<option value="1">Detached/Single-family home</option>
					<option value="2">Semi-detached home</option>
					<option value="3">Low-occupancy apartments</option>
					<option value="4">High-occupancy apartments</option>
				</Form.Select>
				<br />
				<Alert show={true} variant="info">
					If you are unsure about what category your house fits into, see the
					following link:{" "}
					<a
						href="https://www.propertyinvestmentproject.co.uk/blog/types-of-houses/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						here
					</a>
					.
				</Alert>

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
				<Alert show={true} variant="info">
					Find out if your energy provider is green and what percentage of the
					energy they supply is green (UK Only):{" "}
					<a
						href="https://www.which.co.uk/news/2019/09/how-green-is-your-energy-tariff/"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						here
					</a>
					.
				</Alert>

				<br />
				<Form.Label>
					To what extent is your home equipped with energy-saving improvements?
					e.g. Smart Meters, Efficient Boilers etc. *
				</Form.Label>
				<Form.Select {...register("House3", { required: true })}>
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
				<Form.Label>How many adults live in your household? *</Form.Label>
				<Form.Select {...register("House4", { required: true })}>
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

				{progress !== 100 ? (
					<ProgressBar
						variant="success"
						animated
						now={progress}
						label="Loading . . ."
					/>
				) : (
					<StatusBar
						value={footprint}
						goalScore={goalScore}
						goal={goal}
						totalEmissions={totalEmissions}
					/>
				)}
			</div>
			<br />
			{apiDone === false ? (
				<p></p>
			) : (
				<ScoreBreakdown suggestions={suggestions} />
			)}
			<br />
			<br />
			<br />
		</div>
	);
}
