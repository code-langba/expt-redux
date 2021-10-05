import axios from 'axios';

export const fetching = () => {
	return {
		type: 'loading'
	};
};

export const fetchPass = (users) => {
	return {
		type: 'success',
		payload: users
	};
};

export const fetchFail = (error) => {
	return {
		type: 'fail',
		payload: error
	};
};

export const deleteUser = (idx) => {
	console.log(idx);
	return {
		type: 'delete',
		payload: idx
	};
};

export const fetchUsers = (url) => (dispatch) => {
	dispatch(fetching);
	axios
		.get(url)
		.then((res) => {
			const users = res.data;
			dispatch(fetchPass(users));
		})
		.catch((error) => {
			const errorMsg = error.message;
			dispatch(fetchFail(errorMsg));
			console.log(errorMsg);
		});
};
