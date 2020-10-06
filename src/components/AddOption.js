import React, { useContext, useState } from "react";
import OptionsContext from "../context/option-context";

const AddOption = () => {
	const [error, setError] = useState(undefined);
	const { options, dispatch } = useContext(OptionsContext);

	const handleAddOptionForm = (e) => {
		e.preventDefault();
		const inputField = e.target.elements.option;
		const value = inputField.value.trim();

		if (!value) {
			setError("Enter valid value!");
		} else if (options.indexOf(value) > -1) {
			setError("This value already exists.");
		} else {
			dispatch({ type: "ADD_OPTION", options: value });
			inputField.value = "";
			setError(undefined);
		}
	};

	return (
		<div>
			<form className="add-option" onSubmit={handleAddOptionForm}>
				<input type="text" name="option" className="add-option__input"></input>
				<button type="submit" className="button">
					Add Option
				</button>
			</form>
			{error && <p className="add-option-error">{error}</p>}
		</div>
	);
};

export default AddOption;
