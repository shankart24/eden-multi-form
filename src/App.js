import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FormOne from "./Components/Forms/FormOne";
import FormTwo from "./Components/Forms/FormTwo";
import FormThree from "./Components/Forms/FormThree";
import FormFour from "./Components/Forms/FormFour";

const App = () => {
	const [state, setState] = useState({
		progress: {
			stepOne: true,
			stepTwo: false,
			stepThree: false,
			stepFour: false,
		},
		active: {
			stepOne: true,
			stepTwo: false,
			stepThree: false,
			stepFour: false,
		},

		formOne: { fullName: "", displayName: "" },
		formTwo: { workspaceName: "", workspaceUrl: "" },
		formThree: { usageType: "For myself" },
	});

	const handleCircleStyles = (section1, section2) => {
		return section2.length === 0
			? circleStyles[state.progress[section1] ? "active" : ""]
			: circleStyles[state.progress[section1] && state.progress[section2] ? "active" : ""];
	};

	const handleLineStyles = (section1, section2) =>
		lineStyles[state.progress[section1] ? (state.progress[section2] ? "completed" : "active") : ""];

	const handleButtonLogic = (progStep, activeStep) => {
		setState((state) => ({
			...state,
			progress: { ...state.progress, [progStep]: true },
			active: { ...state.active, [activeStep]: false, [progStep]: true },
		}));
	};

	const handleInputChange = (e, formName) => {
		const { name, value } = e.target;
		setState((state) => ({ ...state, [formName]: { ...state[formName], [name]: value } }));
	};

	return (
		<section className="container">
			<section className="content">
				<img src={require("./assets/logo.JPG")} className="logo" />
				<div className="progress-section">
					<div className="circle" style={handleCircleStyles("stepOne", "")}>
						1
					</div>
					<div className="line-outer">
						<div className="line-inner" style={handleLineStyles("stepOne", "stepTwo")}></div>
					</div>
					<div className="circle" style={handleCircleStyles("stepOne", "stepTwo")}>
						2
					</div>
					<div className="line-outer">
						<div className="line-inner" style={handleLineStyles("stepTwo", "stepThree")}></div>
					</div>
					<div className="circle" style={handleCircleStyles("stepTwo", "stepThree")}>
						3
					</div>
					<div className="line-outer">
						<div className="line-inner" style={handleLineStyles("stepThree", "stepFour")}></div>
					</div>
					<div className="circle" style={handleCircleStyles("stepThree", "stepFour")}>
						4
					</div>
				</div>
				{state.active.stepOne ? (
					<FormOne {...{ state, setState, handleButtonLogic, handleInputChange }} />
				) : state.active.stepTwo ? (
					<FormTwo {...{ state, setState, handleButtonLogic, handleInputChange }} />
				) : state.active.stepThree ? (
					<FormThree {...{ state, setState, handleButtonLogic, handleInputChange }} />
				) : state.active.stepFour ? (
					<FormFour {...{ state, setState }} />
				) : null}
			</section>
		</section>
	);
};

export default App;

const circleStyles = {
	active: {
		color: "#ffffff",
		border: "none",
		backgroundColor: "#664de5",
	},
};

const lineStyles = {
	active: {
		width: "50%",
		backgroundColor: "#664de5",
	},
	completed: {
		width: "100%",
		backgroundColor: "#664de5",
	},
};
