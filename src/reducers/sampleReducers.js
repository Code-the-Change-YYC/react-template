// Reducers handle the logic for processing data to update the global Redux store.

import { INCREMENT } from "../actions/types";

export const incrementReducer = (state = { counter: 0 }, action) => {
	const newState = { ...state };
	if (action.type === INCREMENT) {
		newState.counter += action.payload;
	}
	return newState;
}
