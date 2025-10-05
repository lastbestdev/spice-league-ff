import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/About/index.jsx';
import { Constitution } from './pages/Constitution/index.jsx';
import { Season24 } from './pages/Season/24season.jsx';
import { Season25 } from './pages/Season/25season.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/constitution" component={Constitution} />
					<Route path="/season/2024" component={Season24} />
					<Route path="/season/2025" component={Season25} />
					<Route path="/about" component={About} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
