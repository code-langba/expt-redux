import React from 'react';

import { useMemo } from 'react';
import { useTable } from 'react-table';
import { Columns } from './Columns';
import './table.css';
export const UserTable = ({ deleteU, userData }) => {
	const columns = useMemo(() => Columns, []);
	const usersApi = useMemo(() => userData, [userData]);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns: columns,
			data: usersApi
		});
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
						<th>Delete</th>
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')} </td>;
							})}
							<td>
								{/* {console.log(row.original.id)} */}
								<button
									className='btn-table'
									onClick={() => deleteU(row.original.id)}
								>
									x
								</button>
								{/* <button onClick={() => deleteU(row.original.id)}>Edit</button> */}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default UserTable;
