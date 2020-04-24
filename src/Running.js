import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import data from './quiz.json';
class Running extends Component {
	constructor(props) {
		super(props);
		this.state = { ques: 1, score: 0, isLoaded: false, items: [], answ:[] };
	}
	componentDidMount() {
		/*  fetch("https://api.jsonbin.io/b/5ea216e51299b93742350c73")
		   .then(res => res.json())
		   .then(
			 (result) => {
			   this.setState({
				 isLoaded: true,
				 items: result
			   });
			 },
			 // Note: it's important to handle errors here
			 // instead of a catch() block so that we don't swallow
			 // exceptions from actual bugs in components.
			 (error) => {
			   this.setState({
				 isLoaded: false,
			   });
			 }
		   ) */
		this.setState({
			isLoaded: true,
			items: data
		});
	}
	checkAnswer(value) {
		if (value === "true") {
			this.setState((prevState) => {
				return { ques: prevState.ques + 1, score: prevState.score + 1 };
			});
		}
		else {
			this.setState((prevState) => {
				return { ques: prevState.ques + 1 };
			}
			)
		}
	}
	renderQuestions() {
		return (
			<div className="m-4">				
				<ListGroup>
					<ListGroupItem>
						<ListGroupItemHeading className="text-success">{this.state.items[this.state.ques - 1]["question"]}</ListGroupItemHeading>
					</ListGroupItem>
					{
						this.state.items[this.state.ques - 1]["answers"].map((ans, index) => (
							<ListGroupItem onClick={() => this.checkAnswer(ans.correct)} key={index}>								
								<ListGroupItemText>
								{ans.value}
								</ListGroupItemText>
							</ListGroupItem>
						))
					}
				</ListGroup>
				<br />					
				<Link to={'/'} className="btn btn-primary">Ir a la página principal</Link>
				<br />
			</div>

		)
	}
	renderFinish() {
		return (
			<div className="mt-4">
				<div className="text-left pl-4">
				{
					this.state.items.map((ques, ondex) => {
						return 	<div key={ondex}>
								<p className="text-primary m-0">{ques.no}.-  {ques.question}</p>
							
								{this.state.items[ondex]["answers"].map((ans, index) => {
									return (ans.correct==="true") ?	<p className="text-secondary m-1"  style={{ fontSize: '1.0rem' }} key={index}>R.-    {ans.value}</p>:''
								})}
							</div>
						
					})
				}	
				</div>			
				<Link to={'/'} className="btn btn-warning mt-3">Iniciar prueba nuevamente</Link>
			</div>
		)
	}
	render() {
		const len = this.state.items.length;
		if (this.state.isLoaded) {
			return (
				<div className="p-3 m-4">
					<h3 className="header center teal-text text-lighten-2">Mi Reto</h3>
					<div className="row text-white">
						<div className="col-md-6 ">														
							<Card body color="primary">
								<CardTitle>Numero de Pregunta</CardTitle>
								<CardText>{this.state.ques}</CardText>
							</Card>							
						</div>						
						<div className="col-md-6">							
							<Card body color="secondary">
								<CardTitle>Puntuación</CardTitle>
								<CardText>{ this.state.ques <= len ?'-':	this.state.score }</CardText>
							</Card>
						</div>
					</div>
					{
						this.state.ques <= len ? this.renderQuestions() : this.renderFinish()
					}
					
				</div>
			)
		}
		else {
			return <div></div>
		}

	}
}

export default Running;