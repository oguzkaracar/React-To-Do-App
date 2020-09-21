import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	// -------------------- Component Methods ----------------------------------

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	};

	handleDeleteOption = (option) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((opt) => {
				return opt !== option;
			}),
		}));
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const pickedOption = this.state.options[randomNum];
		this.setState(() => ({
			selectedOption: pickedOption,
		}));
	};

	handleAddOption = (value) => {
		if (!value) {
			return "Enter valid value!";
		} else if (this.state.options.indexOf(value) > -1) {
			return "This value already exists.";
		}

		this.setState((prevState) => ({ options: prevState.options.concat(value) })); // shorthand syntax kullandık..
	};

	// ----- Life Cycle methods --------

	componentDidMount() {
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (error) {}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}

	componentWillUnmount() {
		console.log("componentWillUnmount!");
	}

	render() {
		const subtitle = "Put your life in the hands of a computer";
		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
					<div className="widget">
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<OptionModal
					selectedOption={this.state.selectedOption}
					handleDeleteSelectedOption={this.handleDeleteSelectedOption}
				/>
			</div>
		);
	}
}
