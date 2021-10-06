import React from "react";
import { ProgressBar } from "react-bootstrap";

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

	return (
		<ProgressBar
			variant={variantCheck(props.value)}
			now={calculateVal(props.value)}
		/>
	);
}
