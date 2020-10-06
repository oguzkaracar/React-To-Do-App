import React, { useContext } from "react";
import OptionsContext from "../context/option-context";
import Option from "./Option";

const Options = (props) => {
	const { options, dispatch } = useContext(OptionsContext);

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
				<Option key={option} index={index + 1} optionText={option} />
			))}
		</div>
	);
};

export default Options;
