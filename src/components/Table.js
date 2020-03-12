import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentDidMount() {
		const { users } = this.state;
		users.sort(this.compareByRank)
		this.setState({ users });
	}

	componentWillReceiveProps(nextProps) {
		const sortByFunctionsHash = {
			'rank': this.compareByRank,
			'age': this.compareByAge,
			'name': this.compareByName,
			'points': this.compareByPoints,
		}

		if(nextProps.sortBy) {
			const { users } = this.state;
			users.sort(sortByFunctionsHash[nextProps.sortBy]);
			this.setState({ users });
		}
	}

    // complete the comparators
	compareByAge(a, b) {
		return a.age - b.age;
	}

	compareByName(a, b) {
		return a.name < b.name ? -1 : 1;
	}

	compareByPoints(a, b) {
		return a.points - b.points;
	}

	compareByRank(a, b) {
		return a.rank - b.rank;
	}

	render() {
		const { users } = this.state;
 
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => <tr key={`user-${i}`}>
						<td>{user.age}</td>
						<td>{user.name}</td>
						<td>{user.points}</td>
						<td>{user.rank}</td>
					</tr>)}
				</tbody>
			</table>
		</div>)
	}
}
