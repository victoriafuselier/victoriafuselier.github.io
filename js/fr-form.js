const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function setErrorFor(input, errorMessage) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = errorMessage;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
	const userNameValue = userName.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();
	
	if (userNameValue === '') {
		setErrorFor(userName, '*Le champ ne peut pas être vide');
	} else {
		setSuccessFor(userName);
	}
	
	if (emailValue === '') {
		setErrorFor(email, '*Le champ ne peut pas être vide');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, '*Ce n\'est pas un e-mail valid');
	} else {
		setSuccessFor(email);
	}
	
	if (messageValue === '') {
		setErrorFor(message, '*Le champ ne peut pas être vide');
	} else {
		setSuccessFor(message);
	}
}

function validateForm() {
	if (userName.parentElement.classList.contains("success") && email.parentElement.classList.contains("success") && message.parentElement.classList.contains("success")) {
		return true;
	} else {
		return false;
	}
}

form.addEventListener("submit", function(event) {
	event.preventDefault();
	checkInputs();
	validateForm();
	if (validateForm()) {
	  this.submit();
	}
});