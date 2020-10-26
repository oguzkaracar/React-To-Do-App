import React, { useContext } from "react";
import OptionsContext from "../context/option-context";

const Option = ({ optionText, index, isChecked }) => {


	const { options, dispatch } = useContext(OptionsContext);

	
	// delete option method
	const handleDeleteOption = (value) => {
		dispatch({ type: "REMOVE_OPTION", payload: value });
	};

	// dispatch ile reducer a yolla ve orada hallet!!!
	const handleCheckedStatus = (e) => {
		dispatch({type:'CHECKED', payload:{value: e.target.value, isChecked:e.target.checked}})
	};

	return (
		<div className="option">
			<label className="c-custom-checkbox">
				<input
					type="checkbox"
					id={index}
					checked={isChecked}
					value={optionText}
					onChange={handleCheckedStatus}
				/>
				<svg width="32" height="32" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
					<rect
						className="cb-bg"
						width="35"
						height="35"
						x="-2"
						y="-2"
						stroke="#fff"
						fill="none"
						strokeWidth="3"
						rx="6"
						ry="6"></rect>

					<polyline
						className="cb-cm"
						points="4,14 12,23 28,5"
						stroke="transparent"
						strokeWidth="4"
						fill="none"></polyline>
				</svg>
				<li className="option-text">
					{index}. {optionText}
				</li>
			</label>

			<button
				className="button button--link"
				onClick={(e) => {
					handleDeleteOption(optionText);
				}}>
				X
			</button>
		</div>
	);
};

export default Option;
