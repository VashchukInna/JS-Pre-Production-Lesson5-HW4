'use strict';

let parentElement = document.querySelector('.parent');

let boxes = () => {
	parentElement.addEventListener('click', function(event) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('box');
		if (event.target.classList.contains('parent')) {
			parentElement.appendChild(newDiv);
		}
		else {
			parentElement.removeChild(event.target);
		}
	});
};

export default {
	boxes
};