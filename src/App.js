import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navigation from "./components/navigation";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Route renders a component based on a url

function App() {
	return (
		<Router>
			<Navigation />
			<div className="App">
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
