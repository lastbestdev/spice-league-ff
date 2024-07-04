import spiceLogo from '../../assets/ff_logo_primary.png';
import style from './style.module.css';
import { Resource } from '../../components/Resource';
import { getRelativeLink } from '../../utils';

export function Home() {
	return (
		<div class={style.home}>
			<img src={spiceLogo} alt="spice league logo" height="500" width="500" class={style.primaryLogo} />
			<h1>Spice League Fantasy 🌶️ 🥵</h1>
			<section class={style.section}>
				<Resource
					title="Constitution 📜"
					description="View rules & regulations"
					href={getRelativeLink("constitution")}
				/>
				<Resource
					title="Current Season 🏈"
					description="2024-25 season details"
					href={getRelativeLink("season/2024")}
				/>
				<Resource
					title="About 🧐"
					description="Meet the Spice League"
					href={getRelativeLink("about")}
				/>
			</section>
		</div>
	);
}


