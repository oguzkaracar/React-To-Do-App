import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const OptionModal = (props) => (
	<Modal
		className="modal"
		isOpen={!!props.selectedOption}
		contentLabel="Option Modal"
		closeTimeoutMS={200}
		onRequestClose={props.handleDeleteSelectedOption}>
		{/* Component içinde bu şekilde child componentlar kullanabiliriz. */}
		<h3 className="modal__title">Selected Option</h3>
		<div className="modal__body">
			{props.selectedOption && <p>{props.selectedOption}</p>}
			<button onClick={props.handleDeleteSelectedOption} className="button">Okay</button>
		</div>
	</Modal>
);

export default OptionModal;
