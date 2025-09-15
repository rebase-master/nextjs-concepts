export default function UserLayout({
children
}: {
	chidlren: React.ReactNode
}) {
	return (
		<div>
			{" "}
			<h1 style={{ color: "red" }}>This is a user route</h1>
			{children}
		</div>
	);
}
