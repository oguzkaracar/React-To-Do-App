import React, { useContext, useState, useEffect } from "react";
import OptionsContext from "../context/option-context";

const AddOption = () => {
	const [error, setError] = useState(undefined);
	const { options, dispatch, isChecked } = useContext(OptionsContext);

	// aynı not iki kere eklenmesin dedik...
	function findArrayElementByTitle(array, value) {
		return array.filter((element) => {
			return element.value === value;
		});
	}

	const handleAddOptionForm = (e) => {
		e.preventDefault();
		const inputField = e.target.elements.option;
		const value = inputField.value.trim();

		const existValue = findArrayElementByTitle(options, value);

		if (!value) {
			setError("Enter valid value!");
		} else if (existValue.length > 0) {
			setError("This value already exists.");
		} else {
			// setCheckedStatus(false);
			dispatch({ type: "ADD_OPTION", options: { value, isChecked: false } });
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
