import { useLocation } from 'preact-iso';
import spiceLogo from '../assets/ff_logo_secondary.png'

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<a href="/">
					<img src={spiceLogo} alt="spice league logo" height="80" width="80" />
				</a>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
			</nav>
		</header>
	);
}
