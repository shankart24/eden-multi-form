import { MyRadioInput, MyButton } from "../../Elements";

const FormThree = ({ state, setState, handleButtonLogic, handleInputChange }) => {
	return (
		<>
			<div className="headings-section">
				<h1 className="heading">How are you planning to use Eden?</h1>
				<p className="sub-heading">We'll streamline your setup experience accordingly.</p>
			</div>
			<form>
				<div className="radio-inputs-div">
					<MyRadioInput
						name="usageType"
						desc="Write better. Think more clearly. Stay organized."
						label="For myself"
						handler={(e) => handleInputChange(e, "formThree")}
						currentlyActive={state.formThree.usageType}
					/>
					<MyRadioInput
						name="usageType"
						desc="Wikis, docs, tasks & projects, all in one place."
						label="With my team"
						handler={(e) => handleInputChange(e, "formThree")}
						currentlyActive={state.formThree.usageType}
					/>
				</div>
				<MyButton name="Create Workspace" handler={() => handleButtonLogic("stepFour", "stepThree")} />
			</form>
		</>
	);
};

export default FormThree;
