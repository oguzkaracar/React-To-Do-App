import React, { useState, useEffect, useReducer } from "react";
import Header from "./Header";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionsContext from "../context/option-context";
import optionReducer from "../reducers/options";


// !! check yapınca bazen ilk checked işleminde isChecked state'i değişmiyor? localstorage a kesinlikle eklenmiyor.


const IndecisionApp = () => {
	const [options, dispatch] = useReducer(optionReducer, []);
	const [isChecked, setCheckedStatus] = useState(false);
	//lifecycle methods.
	useEffect(() => {
		const optionData = JSON.parse(localStorage.getItem("options"));
		const isCheckedData = JSON.parse(localStorage.getItem('isChecked'));
		if (optionData) {
			dispatch({ type: "POPULATE_OPTIONS", options: optionData, isChecked:isCheckedData});
		}
		return () => {};
	},[]);

	useEffect(() => {
		localStorage.setItem("options", JSON.stringify(options));
		return () => {};
	});

	return (
		<OptionsContext.Provider value={{ options, dispatch, isChecked, setCheckedStatus }}>
			<Header />
			<div className="container">
				<div className="widget">
					<Options />
					<AddOption option={options}/>
				</div>
			</div>
		</OptionsContext.Provider>
	);
};

export default IndecisionApp;
