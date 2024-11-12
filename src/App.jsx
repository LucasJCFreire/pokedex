import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Description from "./pages/Description";
import Home from "./pages/Home";
function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/description/:id" element={<Description />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}
export default App;
