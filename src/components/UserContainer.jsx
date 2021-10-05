import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers, deleteUser } from '../redux/actions/fetchAction';
import UserTable from './usertable/UserTable';

const UserContainer = ({ userData, fetchUsers, deleteU }) => {
	const url = 'https://jsonplaceholder.typicode.com/users';
	useEffect(() => {
		fetchUsers(url);
		// console.log(userData);
	}, [url, fetchUsers]);
	return (
		<div>
			<h1> User List</h1>
			{userData.loading ? (
				<p>...loading</p>
			) : (
				<>
					{/* <pre>{JSON.stringify(userData.users, null, 2)}</pre> */}
					<UserTable userData={userData.users} deleteU={deleteU} />
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userData: state.users
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: (url) => dispatch(fetchUsers(url)),
		deleteU: (idx) => dispatch(deleteUser(idx))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

// return (
// 	<div>
// 		<h1> User List</h1>
// 		{userData.loading ? (
// 			<p>...loading</p>
// 		) : userData.error ? (
// 			<p>{userData.error}</p>
// 		) : (
// 			<div>
// 				{userData.users.map((user) => (
// 					<p key={user.id}>{user.name}</p>
// 				))}
// 			</div>
// 		)}
// 	</div>
// );
// };
