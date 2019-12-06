import axios from 'axios';

const initialState = {
	email: null,
	firstName: null,
    lastName: null,
    errorMessage: ''
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export const requestUserData = () => {
	let data = axios
		.get('/auth/user-data')
		.then(res => res.data)
        // .catch(err => err.message);
        
	return {
		type: REQUEST_USER_DATA,
		payload: data
	};
};

export default function userReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REQUEST_USER_DATA + '_FULFILLED':
			const { email, firstName, lastName } = payload.user;
            return { email, firstName, lastName };
        // case REQUEST_USER_DATA + '_REJECTED':
        //         return {...state, errorMessage: payload};
		default:
			return state;
	}
}
