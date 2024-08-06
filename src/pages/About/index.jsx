import commishPic from '../../assets/comish_pic.webp'
import loser2024pic from '../../assets/2024_loser.png'
import style from './style.module.css'

export function About() {
	const isMobile = window.innerWidth < 639

	return (
		<section style="page">
			<h1>About 🧐</h1>
			<h2>Past Champions</h2>
			<ul>
				<li><strong>2023-24: Quentin Foust</strong> (record: 11-3, 1st round: Derrick Henry)</li>
			</ul>

			<h2>Past Losers</h2>
			<span class={style.losersItem}><strong>2023-24:</strong> <img src={loser2024pic} alt="2024 loser pic" height="240" width="240"/></span>

			<h2>The League</h2>
			<p>The Spice League is an assembly of close friends & football fans that convene every year for a fantasy football competition. Though the league has been around for several years, it experienced a change in leadership when Brad Deibert was appointed league commissioner in 2023.</p>

			<div class={style.commishHeader}>
				<div>
					<h2>Your Commissioner</h2>
					{isMobile && <img src={commishPic} alt="commissioner pic" height="240" width="240" class={style.commishImg}/>}
					<h3>Brad Deibert</h3>
					<p>Oftentimes affectionately referred to as "my commish" by league members, Brad has served as full time commissioner of the Spice League since filling the role in 2023. He loves all things fantasy football, Green Bay Packers, and especially grown men acting their age when it comes to their fantasy team. (Hint: it makes his job much easier!)</p>
					<p>Brad lives in Missoula, MT with his wife, Alicia, and helplessly adorable housecat, Dorothy.</p>
				</div>
				{!isMobile && <img src={commishPic} alt="commissioner pic" height="240" width="240" class={style.commishImg}/>}
			</div>

			
		</section>
	);
}
