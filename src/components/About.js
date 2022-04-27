export default function About() {
	return (
		<div className="centered">
			<div className="about-container">
				<h2>About me</h2>
				<p>
					I'm living on <span className="tag"> 📌 Buenos Aires, Argentina</span>. Actually I'm 22 years old
					and I'm a autodidact. <br />
					I worked two years on own-projects improving my skills and knowledge. <br />
					I'm a <span className="tag"> Frontend Developer</span> and I'm always looking for new challenges.{' '}
					<br />
					Like I said, I'm a Graphic Designer too and I love to create beautiful designs in collab with UX/UI
					team.<br />
				</p>
				<div className="studies">
					<h2>Studies</h2>
					<p>
						Bootcamp of <span className="tag">Fullstack Developer</span> at{' '}
						<span className="tag"> Microverse</span>. <br />
						<span className="alt-text">OCT, 2021 - OCT, 2022.</span>
					</p>
					<p>
						Course of <span className="tag">Javascript</span> at <span className="tag"> Coderhouse</span>.{' '}
						<br />
						<span className="alt-text">FEB, 2021 - APR, 2021.</span>
					</p>
					<p>
						Course of <span className="tag">HTML & CSS</span> at <span className="tag"> Da Vinci</span>.{' '}
						<br />
						<span className="alt-text">OCT, 2020 - JAN, 2021.</span>
					</p>
					<p>
						Degree of <span className="tag">Graphic Design</span> at <span className="tag"> Da Vinci</span>.{' '}
						<br />
						<span className="alt-text">JAN, 2020 - SEP, 2021.</span>
					</p>
				</div>
				<div className="skills">
					<h2>Skills</h2>
					<div className="skillslist">
						<ul className="skillsul">
							<p>Developer</p>
							<li>
								<span>HTML & CSS</span>
							</li>
							<li>
								<span>Javascript</span>
							</li>
							<li>
								<span>React</span>
							</li>
							<li>
								<span>Node.js</span>
							</li>
							<li>
								<span>Express</span>
							</li>
							<li>
								<span>MongoDB</span>
							</li>
							<li>
								<span>Git</span>
							</li>
							<li>
								<span>SASS</span>
							</li>
						</ul>

						<ul className="skillsul">
						<p>Graphic Designer</p>
							<li>
								<span>Photoshop</span>
							</li>
							<li>
								<span>Illustrator</span>
							</li>
							<li>
								<span>InDesign</span>
							</li>
							<li>
								<span>Adobe XD</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
