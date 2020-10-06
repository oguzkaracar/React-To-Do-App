const optionReducer = (state,action)=>{
    switch (action.type) {
		case "POPULATE_OPTIONS":
			return action.options;
		case "ADD_OPTION":
            return [...state, action.options];
        case "REMOVE_ALL_OPTIONS":
            return [];
		case "REMOVE_OPTION":
			return state.filter((option) => {
				return option !== action.option;
			});
		default:
			return state;
	}
}
export default optionReducer;