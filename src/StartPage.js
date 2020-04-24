import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class StartPage extends Component {
	render() {
		return (
			<div>
				<div id="index-banner" className="parallax-container">
					<div className="section no-pad-bot">
						<div className="container">
							<br />
							<h1 className="header center">Mi Reto</h1>
							<div className="row text-center">
								<h5 className="header col">Responda estas 10 preguntas básicas de reacción con 10 puntos cada una.</h5>
							</div>
							<div className="row">
								<div className="col text-center">									
									<Link to={'/running'} className="btn btn-secondary">Empezar</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default StartPage;