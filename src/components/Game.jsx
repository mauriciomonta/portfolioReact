import { useState } from 'react';

export default function Game() {

	const [start, setStart] = useState(false);

	return (
		<div className="game">
			<div className={start ? "opacity0" : "firstscreen"}>
				<h1>Do you want to play?</h1>
				<div className="buttons">
					<button onClick={() => {setStart(true)}}>Sure, go ahead</button>
				</div>
			</div>
		</div>
	);
}
