import React from "react";
import Option from "./Option";

const Options = (props) => (
	<div>
		<div className="widget-header">
			<h3>Your Options</h3>
			<button onClick={props.handleDeleteOptions} className="button button--link">
				Remove All
			</button>
		</div>

		{props.options.length === 0 && <p className="widget-message">Please add and option!</p>}
		{props.options.map((option, index) => (
			<Option 
				key={option} index={index + 1} 
				optionText={option} 
				handleDeleteOption={props.handleDeleteOption} 
				/>
		))}
	</div>
);

export default Options;
