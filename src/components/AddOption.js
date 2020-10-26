import React, { useContext, useState } from "react";
import OptionsContext from "../context/option-context";

const AddOption = () => {
	
	const [error, setError] = useState(undefined);
	const [text, setText] = useState("");

	const { options, dispatch } = useContext(OptionsContext);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleAddOptionForm = (e) => {
		e.preventDefault();

		const inputValue = text.trim();

		const existValue = options.filter((option) => {
			return option.value.includes(inputValue);
		});

		if (!inputValue) {
			setError("Enter valid value!");
		} else if (existValue.length > 0) {
			setError("This value already exists.");
		} else {
			dispatch({ type: "ADD_OPTION", payload: { value: inputValue, isChecked: false } });
			setText("");
			setError(undefined);
		}
	};

	return (
		<div>
			<form className="add-option" onSubmit={handleAddOptionForm}>
				<input type="text" name="option" className="add-option__input" value={text} onChange={handleChange}></input>
				<button type="submit" className="button">
					Add Option
				</button>
			</form>
			{error && <p className="add-option-error">{error}</p>}
		</div>
	);
};

export default AddOption;
