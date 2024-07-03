import { render } from 'preact-render-to-string';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/About/index.jsx';
import { Constitution } from './pages/Constitution/index.jsx';
import { Season } from './pages/Season/index.jsx';
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
					<Route path="/season/2024" component={Season} />
					<Route path="/about" component={About} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
