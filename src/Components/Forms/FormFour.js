import { MyButton } from "../Elements";

const FormFour = ({ state, setState }) => {
	return (
		<>
			<img src={require("../../assets/tick.JPG")} className="tick-img" alt="Success!" />
			<div className="headings-section">
				<h1 className="heading">Congratulations, Eren!</h1>
				<p className="sub-heading">You have completed onboarding, you can start using Eden!</p>
			</div>
			<form style={{ marginTop: "-35px" }}>
				<MyButton
					name="Launch Eden"
					handler={() => {
						alert("Yay! Form Submitted!");
						const formData = { ...state.formOne, ...state.formTwo, ...state.formThree };
						console.log(formData);
					}}
				/>
			</form>
		</>
	);
};

export default FormFour;
