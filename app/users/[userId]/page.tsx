import {notFound} from "next/navigation";

async function fetchUser(id: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	if (!res.ok) {
		return null;
	}
	return await res.json();
}
export default async function UserDetail({params} : {
	params: Promise<{ userId: string }>;
}){
	const { userId } = await params;
	const user = await fetchUser(userId);

	// Show built-in error page is user not found
	if (!user){
		notFound();
	}

	return (
		<div>
			<br/>
			<h1>{user.name}</h1>
			<p>
				<strong>Email:</strong>&nbsp;{user.email}
			</p>
			<p>
				<strong>Phone:</strong>&nbsp;{user.phone}
			</p>
			<p>
				<strong>Website:</strong>
				<a
					href={`https://${user.website}`}
					>&nbsp;
					{user.website}
				</a>
			</p>
		</div>
	)
}
