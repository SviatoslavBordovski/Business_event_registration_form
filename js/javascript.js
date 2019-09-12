function checkfirstName() {                        
    var firstName = document.getElementById("firstName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,16}$/;

	
	if(rel.test(firstName)) {
		document.getElementById("firstNamePrompt").style.color="green"
		document.getElementById("firstNamePrompt").innerHTML="<strong> Correct input</strong>";
		return true;
	}

	else {
		document.getElementById("firstNamePrompt").style.color="red";
		document.getElementById("firstNamePrompt").innerHTML="<strong> First name field required!</strong>";
		return false;
    }
}

function checklastName() {
    var lastName = document.getElementById("lastName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,25}$/;

	
	if(rel.test(lastName)) {
		document.getElementById("lastNamePrompt").style.color="green";
		document.getElementById("lastNamePrompt").innerHTML="<strong> Correct input</strong>";
		return true;
	}

	else {
		document.getElementById("lastNamePrompt").style.color="red";
		document.getElementById("lastNamePrompt").innerHTML="<strong> Last name field required!</strong>";
		return false;
    }
}

function validPhone() {
    var pNumber = document.getElementById("pNumber").value;
	var rel = /^\d{12}$/;

	if(rel.test(pNumber)) {
		document.getElementById("pNumberPrompt").style.color="green";
		document.getElementById("pNumberPrompt").innerHTML="<strong> Correct input</strong>";
		return true;
	}

	else {
		document.getElementById("pNumberPrompt").style.color="red";
		document.getElementById("pNumberPrompt").innerHTML="<strong> Please enter 12 characters of telephone number!</strong>";
		return false;
    }
}

function validDate() {
    var eventDate = document.getElementById("eventDate").value;
	var rel = /^\d{1,2}\d{1,2}\d{4}$/;

	if(rel.test(eventDate)) {
		document.getElementById("eventDatePrompt").style.color="green";
		document.getElementById("eventDatePrompt").innerHTML="<strong> Correct input</strong>";
		return true;
	}

	else {
		document.getElementById("eventDatePrompt").style.color="red";
		document.getElementById("eventDatePrompt").innerHTML="<strong> Please enter 2 digit month, 2 digit day, 4 digit year!</strong>";
		return false;
    }
}

function FakeSubmitButton() {
    alert("Thank you for your submission. We will contact you as soon as possible!");
}
