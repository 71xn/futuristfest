import { Alert } from "react-bootstrap";
import "../styles/About.css";
import Health from "../components/health";

function About() {
	return (
		<div className="About">
			<Alert show={true} variant="info">
				<Alert.Heading className="AlertHeading">About</Alert.Heading>
				<hr />
				<p>
					This is our submission for the{" "}
					<a href="https://futuristfest-2021.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=portfolio">
						FuturistFest CTF
					</a>
					, in relation to environmental issues. More specifically this web
					application has been designed to target the issues of air pollution,
					carbon footprint and how we can start to reduce the amount of carbon
					that we release into the atmosphere. More details about the project
					and the CTF can be found on the webpage listed above or check back
					soon for more updates, alternatively contact us{" "}
					<a href="/contact">here</a>!
				</p>
			</Alert>
			<Health />
		</div>
	);
}

export default About;
