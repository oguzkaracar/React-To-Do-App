import React, { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionsContext from "../context/option-context";
import optionReducer from "../reducers/options";


const IndecisionApp = () => {

	const [options, dispatch] = useReducer(optionReducer, [{value:'', isChecked:false}]);

	//lifecycle methods.
	useEffect(() => {
		const optionData = JSON.parse(localStorage.getItem("options"));
		if (optionData) {
			dispatch({ type: "POPULATE_OPTIONS", payload:optionData});
		}
		return () => {};
	},[]);

	useEffect(() => {
		localStorage.setItem("options", JSON.stringify(options));
		return () => {};
	});

	return (
		<OptionsContext.Provider value={{ options, dispatch}}>
			<Header />
			<div className="container">
				<div className="widget">
					<Options />
					<AddOption/>
				</div>
			</div>
		</OptionsContext.Provider>
	);
};

export default IndecisionApp;
