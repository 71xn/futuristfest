import React from "react";
import { ProgressBar } from "react-bootstrap";

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

	return (
		<ProgressBar
			variant={variantCheck(props.value)}
			now={calculateVal(props.value)}
		/>
	);
}
