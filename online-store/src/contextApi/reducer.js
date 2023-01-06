export const INITIAL_STATE = {
	items: [],
	added: false,
};

export const addToCartReducer = (
	state,
	action,
) => {
	switch (action.type) {
		case "ADD":
			return {
				...state,
				added: true,
				items: [...state.items, action.payload],
			};
		case "REMOVE":
			return {
				...state,
				added: false,
				items: state.items.filter(
					(item) => item != action.payload,
				),
			};
		default:
			return state;
	}
};
