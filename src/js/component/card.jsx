import React from "react";


//create your first component
const Card = (props) => {
	return (
		<div class="bg-dark text-light p-3 m-2 border border-light rounded fs-1">
            <span><strong>{props.content}</strong></span>
            </div>
	);
};

export default Card;
