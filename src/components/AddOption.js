import React from "react";

export default class AddOption extends React.Component {
	state = {
		error: undefined,
	};

	handleAddOption = (e) => {
		e.preventDefault();
		const inputField = e.target.elements.option;
		const value = inputField.value.trim();

		const error = this.props.handleAddOption(value);
		this.setState(() => {
			return { error };
		});

		if (!error) {
			inputField.value = "";
		}
	};
	render() {
		return (
			<div>
				<form 
				className="add-option"
				onSubmit={this.handleAddOption}>
					<input type="text" name="option" className="add-option__input"></input>
					<button type="submit" className="button">Add Option</button>
				</form>
				{this.state.error && <p className="add-option-error">{this.state.error}</p>}
			</div>
		);
	}
}
