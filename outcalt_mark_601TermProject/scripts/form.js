var form = document.getElementById("submitForm");
var message = document.getElementById('messageText');
var otherInput = document.getElementById('other');

form.addEventListener("click", function(e) {
	checkSubjectSize(e);
	checkName(e);
	checkEmail(e);
});

message.addEventListener("keyup", charCount);
otherInput.addEventListener("click", showOtherInput);

function checkSubjectSize(e) {
	var subject = document.getElementById("subject");
	var valid = subject.value.length > 3;
	if (!valid) {
		e.preventDefault();
		var error = document.getElementById('subjectError');
		error.textContent = 'Please be descriptive and use more than 3 characters for the subject.';
		subject.className = 'error';
	} 
}

function checkName(e) {
	var name = document.getElementById('name');
	var validType = /^[a-zA-Z]+$/.test(name.value);
	var validLength = name.value.length > 2;
	if (!validType) {
		e.preventDefault();
		var error = document.getElementById('nameError');
		error.textContent = 'Name must only be alphanumeric chars';
		name.className = 'error';
	} 
	if (!validLength) {
		e.preventDefault();
		var error = document.getElementById('nameError');
		error.textContent = 'Name must be more than 2 characters.  Please use a full name';
		name.className = 'error';
	} 
}

function checkEmail(e) {
	var email = document.getElementById('email');
	var valid = /[^@]+@[^@]+\.\w{2,4}/.test(email.value);
	if (!valid) {
		e.preventDefault();
		var error = document.getElementById('emailError');
		error.textContent = 'Email must be in the proper format';
		email.className = 'error';
	}
}

function charCount() {
	var charLimit = 500;
	var messageText = document.getElementById('messageText').value;
	var charCount = document.getElementById('charCount');
	var counter = (charLimit - (messageText.length));
	charCount.textContent = counter + ' chars left';
}

function showOtherInput() {
	var otherEl = document.getElementById('tell');
	if (this.value == 'other') {
		otherEl.style.display = 'block';
	}
}
