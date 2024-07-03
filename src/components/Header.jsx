import spiceLogo from '../assets/ff_logo_secondary.png'
import style from './header.module.css'

export function Header() {
	return (
		<header class={style.header}>
			<a href="/" class={style.headerLeft}>
				<img src={spiceLogo} alt="spice league logo" height="80" width="80" class={style.logo} />
				<h2>Spice League Fantasy &nbsp; 🏈 🏆</h2>				
			</a>
			<nav>
				<a alt="go back" onClick={() => history.back()} class={style.navlink}>
					Back
				</a>
			</nav>
		</header>
	);
}
