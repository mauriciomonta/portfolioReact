import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {

	const [isScrolled, setIsScrolled] = useState(false);

	window.addEventListener('scroll', () => {
		if (window.scrollY > 750) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	});

	return (
		<nav>
			<div className={isScrolled ? "nav-wrapperbg" : "nav-wrapper"}>
				<div className="container">
					<h1 className='logo'>mauricio</h1>
					<ul>
						<li>
							<NavLink id='homelink' exact to="/">
								home
							</NavLink>
						</li>
						<li>
							<NavLink id='aboutlink' to="/about">about</NavLink>
						</li>
						<li>
							<NavLink id='projectlink' to="/projects">project</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
