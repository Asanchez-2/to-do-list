import React from "react";

//include bootstrap npm library into the bundle
import "bootstrap";

//create your first component
export class InputToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			messages: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.keyPressed = this.keyPressed.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	}

	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	keyPressed(event) {
		if (event.key === "Enter") {
			this.submitMessage();
		}
	}

	submitMessage() {
		this.setState({ messages: [...this.state.messages, this.state.input] });
		this.setState({ input: "" });
	}
	render() {
		return (
			<div className="container text-align-center">
				<h2>To Do List</h2>
				<input
					className="divInput"
					placeholder="What´s next to be done?"
					onChange={this.handleChange}
					onKeyPress={this.keyPressed}
					value={this.state.input}
				/>
				<ul className="list-group">
					{this.state.messages.map((item, i) => (
						<li className="list-group-item" key={i}>
							{item}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
