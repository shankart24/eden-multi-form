import { MyInput, MyInputWithLabel, MyButton } from "../Elements";

const FormTwo = ({ state, setState, handleButtonLogic, handleInputChange, isFormFilled }) => {
	return (
		<>
			<div className="headings-section">
				<h1 className="heading">Let's set up a home for all your work</h1>
				<p className="sub-heading">You can always create another workspace later.</p>
			</div>
			<form>
				<MyInput
					name="workspaceName"
					placeholder="Eden"
					type="text"
					label="Workspace Name"
					handler={(e) => handleInputChange(e, "formTwo")}
					value={state.formTwo.workspaceName}
				/>
				<MyInputWithLabel
					name="workspaceUrl"
					placeholder="Example"
					type="text"
					label="Workspace URL"
					extraMsg="optional"
					predefinedLabel="www.eden.com/"
					handler={(e) => handleInputChange(e, "formTwo")}
					value={state.formTwo.workspaceUrl}
				/>
				<MyButton
					name="Create Workspace"
					handler={() => {
						const errorMsg = isFormFilled("workspaceName", "workspaceUrl", "formTwo");
						if (errorMsg.length === 0) {
							handleButtonLogic("stepThree", "stepTwo");
						} else {
							alert(errorMsg);
						}
					}}
				/>
			</form>
		</>
	);
};

export default FormTwo;
