export default async function Users() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	console.log(users);
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user: {id: number, name: string}) => (
					<li key={user.id}>
						<p>{user.name}</p>
					</li>
				))}
			</ul>
		</div>
	)
}