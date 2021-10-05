let apis = {
	loading: false,
	users: [],
	error: ''
};

// const [apis, setApis] = useState({
// 	loading: false,
// 	users: [],
// 	error: ''
// });

const fetchReducer = (state = apis, action) => {
	switch (action.type) {
		case 'loading':
			return {
				...state,
				loading: true
			};
		case 'success':
			return {
				...state,
				users: action.payload
			};
		case 'fail':
			return {
				...state,
				error: action.payload
			};

		case 'delete':
			// const users = state.users.filter((user) => user.id !== action.payload);
			// console.log(users);
			// state.users = users;
			// console.log(apis);
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload)
			};
		default:
			break;
	}
	return state;
};

export default fetchReducer;
