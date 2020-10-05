import React, { useState, useEffect } from "react";
import Header from "./Header";
import Options from "./Options";
import AddOption from "./AddOption";

const IndecisionApp = () => {

	const [options, setOptions] = useState([]);

	useEffect(() => {
		const optionData = JSON.parse(localStorage.getItem("options"));
		if (optionData) {
			setOptions(optionData);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("options", JSON.stringify(options));
	}, [options]);

	const handleDeleteOptions = () => {
		setOptions([]);
	};

	const handleDeleteSelectedOption = () => {
		setSelectedOption(undefined);
	};

	const handleDeleteOption = (option) => {
		setOptions(() => {
			return options.filter((opt) => {
				return opt !== option;
			});
		});
	};

	const handlePick = () => {
		const randomNum = Math.floor(Math.random() * options.length);
		const pickedOption = options[randomNum];
		setSelectedOption(pickedOption);
	};

	const handleAddOption = (value) => {
		if (!value) {
			return "Enter valid value!";
		} else if (options.indexOf(value) > -1) {
			return "This value already exists.";
		}
		// buraya bak!.
		setOptions(options.concat(value));
	};

	return (
		<div>
			<Header />
			<div className="container">
				<div className="widget">
					<Options
						options={options}
						handleDeleteOptions={handleDeleteOptions}
						handleDeleteOption={handleDeleteOption}
					/>
					<AddOption handleAddOption={handleAddOption} />
				</div>
			</div>
		</div>
	);
};

export default IndecisionApp;
