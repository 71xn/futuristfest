import { Alert } from "react-bootstrap";
import "../styles/Main.css";
import Form from "../components/Form";

function Main() {
	return (
		<div className="Main">
			<Alert show={true} variant="success">
				<Alert.Heading>This page is still a work in progress!</Alert.Heading>
				<hr />
				<p>
					{" "}
					Check back soon for more updates, or contact us{" "}
					<a href="/contact">here</a>.
				</p>
			</Alert>
			<br />
		</div>
	);
}

export default Main;
