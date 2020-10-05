import React from "react";

const Option = (props) => {
	return (
		<div className="option">
			<li className="option-text">{props.index}. {props.optionText}</li>
			<button
				className="button button--link"
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}>
				X
			</button>
		</div>
	);
};

export default Option;
