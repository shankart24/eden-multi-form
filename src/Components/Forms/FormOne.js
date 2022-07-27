import { MyInput, MyButton } from "../Elements";

const FormOne = ({ state, setState, handleButtonLogic, handleInputChange }) => {
	return (
		<>
			<div className="headings-section">
				<h1 className="heading">Welcome! First things first...</h1>
				<p className="sub-heading">You can always change them later.</p>
			</div>
			<form>
				<MyInput
					name="fullName"
					placeholder="Steve Jobs"
					type="text"
					label="Full Name"
					handler={(e) => handleInputChange(e, "formOne")}
					value={state.formOne.fullName}
				/>
				<MyInput
					name="displayName"
					placeholder="Steve"
					type="text"
					label="Display Name"
					handler={(e) => handleInputChange(e, "formOne")}
					value={state.formOne.displayName}
				/>
				<MyButton name="Create Workspace" handler={() => handleButtonLogic("stepTwo", "stepOne")} />
			</form>
		</>
	);
};

export default FormOne;
