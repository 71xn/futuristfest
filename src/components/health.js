import React from "react";
import { Alert } from "react-bootstrap";
import "../styles/About.css";

const check = async () => {
	const apiHealthURL = "https://futuristfest.herokuapp.com/healthcheck";
	const response = await fetch(apiHealthURL);
	const data = await response.json();
	return Object.values(data).includes("health-status");
};

function Health() {
	if (check) {
		return (
			<div className="About">
				<Alert show={true} variant="success">
					<Alert.Heading className="AlertHeading">
						Application Health Check
					</Alert.Heading>
					<hr />
					<p>All systems are operational!</p>
				</Alert>
			</div>
		);
	} else {
		return (
			<div className="About">
				<Alert show={true} variant="danger">
					<Alert.Heading className="AlertHeading">
						Application Health Check
					</Alert.Heading>
					<hr />
					<p>Backend System Error - Database not responsive!</p>
				</Alert>
			</div>
		);
	}
}

export default Health;
