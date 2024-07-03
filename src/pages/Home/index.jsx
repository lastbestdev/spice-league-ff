import spiceLogo from '../../assets/ff_logo_primary.png';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<img src={spiceLogo} alt="spice league logo" height="500" width="500" />
			<h1>Spice League Fantasy 🌶️ 🥵</h1>
			<section>
				<Resource
					title="Constitution 📜"
					description="View rules & regulations"
					href="/constitution"
				/>
				<Resource
					title="Current Season 🏈"
					description="2024-25 season details"
					href="/season/2024"
				/>
				<Resource
					title="About 🧐"
					description="Meet the Spice League"
					href="/about"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
