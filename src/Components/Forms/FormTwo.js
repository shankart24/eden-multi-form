import { MyInput, MyButton } from "../Elements";

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
				<div className="input-div">
					<label htmlFor="workspaceUrl">
						Workspace URL <span style={{ fontSize: "0.7rem", color: "#979dab" }}>(optional)</span>
					</label>
					<div className="workspace-input-div">
						<div className="workspace-predef">www.eden.com/</div>
						<input
							id="workspaceUrl"
							name="workspaceUrl"
							type="text"
							placeholder="Example"
							value={state.formTwo.workspaceUrl}
							onChange={(e) => handleInputChange(e, "formTwo")}
						/>
					</div>
				</div>
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
