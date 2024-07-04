import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/About/index.jsx';
import { Constitution } from './pages/Constitution/index.jsx';
import { Season } from './pages/Season/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { getRelativeLink } from './utils.js';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path={getRelativeLink()} component={Home} />
					<Route path={getRelativeLink("constitution")} component={Constitution} />
					<Route path={getRelativeLink("season/2024")} component={Season} />
					<Route path={getRelativeLink("about")} component={About} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
