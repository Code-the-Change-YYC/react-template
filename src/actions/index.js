// Actions should take the same form as the sample below.
// Actions are functions that return some operation type and payload.
// The returned value is to be consumed by Redux reducers.

import { INCREMENT } from "./types";

export const increment = (num) => {
	return {
		type: INCREMENT,
		payload: num
	};
}

// If an action