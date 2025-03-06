import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const colors = ["red", "yellow", "green"]
	const changeColorRandom = () =>{
		const indeRandom = Math.floor(Math.random() * colors.length);
		setColor(colors[indeRandom])
	}



	return (

		<div className="traffict-light container">
			<div className="header">

				<div className="traffict-header">
					<div className={`red light ${color === "red" ? "glow" : " "}`}
						onClick={() => { setColor("red") }}>

					</div>
					<div className={`yellow light ${color === "yellow" ? "glow" : " "}`}
						onClick={() => { setColor("yellow") }}>

					</div>
					<div className={`green light ${color === "green" ? "glow" : " "}`}
						onClick={() => { setColor("green") }}>
					</div>

				</div>
				<button onClick={changeColorRandom}>Cambiar Color</button>
			</div>
		</div>
	);
};

export default Home;