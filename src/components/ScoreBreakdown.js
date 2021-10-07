import React from "react";
import { Alert } from "react-bootstrap";
import "../styles/ScoreBreakdown.css";

export default function ScoreBreakdown(props) {
	// Suggestions
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
			</Alert>
			<br />
			<p className="title">This is your score breakdown</p>
			<hr />
		</div>
	);
}
