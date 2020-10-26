import React, { useContext } from "react";
import OptionsContext from "../context/option-context";
import Option from "./Option";
import { v4 as uuid } from 'uuid';

const Options = () => {
	const { options, dispatch } = useContext(OptionsContext);

	const {value, isChecked} = options;
	const handleDeleteOptions = () => {
		dispatch({ type: "REMOVE_ALL_OPTIONS" });
	};

	return (
		<div>
			<div className="widget-header">
				<h3>Your Todo Lists</h3>
				<button onClick={handleDeleteOptions} className="button button--link">
					Remove All
				</button>
			</div>

			{options.length === 0 && <p className="widget-message">Please add and option!</p>}
			{options.map((option, index) => (
				<Option key={uuid()} index={index + 1} optionText={option.value} isChecked={option.isChecked}/>
			))}
		</div>
	);
};

export default Options;
