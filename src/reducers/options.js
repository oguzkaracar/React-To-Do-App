const optionReducer = (state,action)=>{
    switch (action.type) {
		case "POPULATE_OPTIONS":
			return action.payload
		case "ADD_OPTION":
			return [...state, action.payload]
        case "REMOVE_ALL_OPTIONS":
            return [];
		case "REMOVE_OPTION":
			return state.filter((option) => {
				return option.value !== action.payload;
			});
		case "CHECKED":
			return state.filter((option)=>{
				if(option.value === action.payload.value){
					return option.isChecked = action.payload.isChecked
				}
				return option;
			})
		default:
			return state;
	}
}
export default optionReducer;