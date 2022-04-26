import { useState } from 'react';
import Game from './Game.jsx'

export default function Home() {
	const [ scroll, setScroll ] = useState(false);

	window.addEventListener('scroll', () => {
		if (window.scrollY > 16) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	});

	return (
		<div className="centered">
			<div className="home-text">
				<h1 className="title">Hi, i'm</h1>
				<p className={scroll ? 'hidden' : 'slidedown'}>Slide down</p>
			</div>
			<div className="home-about">
				<div className="rightside">
					<h2>
						<span className="firstcolor">But call me Mau.</span> Nice to meet you 👋🏼
					</h2>
					<p>
						{' '}
						I started on this studying Graphic design but a few years later, I get more interested to become
						a developer. At this time I already had knowledge about Graphic Design and I wanted to include
						that knowledge in my new beginning. For that reason I decided to start learning how to code
						focused on the front end.
					</p>
					<p>
						Once I learned the basis of code: html, css and javascript. I discovered a new passion for solve
						algorithms, develop webapps and burn my brain looking for a solution for that bug that doesn't
						me sleep
					</p>

					<h3>
						You can know a little bit more about me on{' '}
						<a href="/about" className="aboutmeBtn">
							about section.
						</a>
					</h3>
				</div>
			</div>
			<Game />
		</div>
	);
}
