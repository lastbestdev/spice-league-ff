import style from './resource.module.css'

export function Resource({ href, title, description }) {
	return (
		<a href={href} class={style.resource}>
			<h2>{title}</h2>
			<p>{description}</p>
		</a>
	);
}