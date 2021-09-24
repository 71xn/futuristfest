import { Alert } from "react-bootstrap";
import "../styles/About.css";

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
					application has been designed to target the issue of air pollution and
					how we can start to tackle that problem. More details about the
					project and the CTF can be found on the webpage listed above or check
					back soon for more updates, alternatively contact us{" "}
					<a href="/contact">here</a>!
				</p>
			</Alert>
		</div>
	);
}

export default About;