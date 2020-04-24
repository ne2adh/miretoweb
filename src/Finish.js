import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


export const Finish = (props) => {
	return (
		<div>			
			<div className="row">
				<div className="col" >					
					<Card body outline color="secondary">
						<CardTitle>Score</CardTitle>
						<CardText>{props.score}</CardText>
					</Card>
				</div>
			</div>
			<Link to={'/'} className="btn btn-secondary">Get Started</Link>
		</div>
	)
}

export default Finish