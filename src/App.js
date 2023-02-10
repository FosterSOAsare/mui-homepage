import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/system";

function App() {
	return (
		<main style={{ fontFamily: "'Roboto' , sans-serif" }}>
			<Navbar className="navbar" />
			<Container maxWidth="lg" className="container"></Container>
		</main>
	);
}

export default App;
