const MyInput = ({ name, placeholder, type, label, handler, value }) => {
	return (
		<div className="input-div">
			<label htmlFor={name}>{label}</label>
			<input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={handler} />
		</div>
	);
};

const MyInputWithLabel = ({ name, placeholder, type, label, handler, value, extraMsg, predefinedLabel }) => {
	return (
		<div className="input-div">
			<label htmlFor="workspaceUrl">
				{label} <span style={{ fontSize: "0.7rem", color: "#979dab" }}>({extraMsg})</span>
			</label>
			<div className="workspace-input-div">
				<div className="workspace-predef">{predefinedLabel}</div>
				<input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={handler} />
			</div>
		</div>
	);
};

const MyRadioInput = ({ name, desc, label, handler, value, currentlyActive }) => {
	const styles = {
		label: {
			fontSize: "0.9rem",
			fontWeight: "600",
			margin: "10px 0px 10px 0px",
		},
		desc: {
			fontSize: "0.8rem",
			fontWeight: "500",
			color: "#7c8088",
		},
		iconActive: {
			color: "#664de5",
			width: "25px",
		},
		icon: {
			width: "25px",
		},
		div: {
			width: "47%",
			padding: "18px",
			border: "2px solid rgb(206, 211, 215)",
			borderRadius: "5px",
			cursor: "pointer",
		},
		divActive: {
			width: "47%",
			padding: "18px",
			borderRadius: "5px",
			border: "2px solid #664de5",
			cursor: "pointer",
		},
	};

	return (
		<label style={styles[currentlyActive === label ? "divActive" : "div"]}>
			{label === "For myself" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					style={styles[currentlyActive === label ? "iconActive" : "icon"]}
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					style={styles[currentlyActive === label ? "iconActive" : "icon"]}
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
				</svg>
			)}
			<h4 style={styles.label}> {label}</h4>
			<p style={styles.desc}>{desc}</p>
			<input id={name} name={name} type="radio" value={label} onChange={handler} />
		</label>
	);
};

const MyButton = ({ name, handler }) => {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				handler();
			}}
		>
			{name}
		</button>
	);
};

export { MyInput, MyInputWithLabel, MyRadioInput, MyButton };
