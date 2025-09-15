import ButtonComponent from "./button";

export default async function Contact() {
	console.log("This is a server component");

	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await response.json();
	console.log(posts);
	return (
		<div>
			<h1>Contact</h1>
			<ButtonComponent />
		</div>
	)
}