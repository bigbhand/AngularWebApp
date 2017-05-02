function getEmailPartAndDomain(){
	
	var email = document.getElementById('email').value;
	var part = email.trim().substring(0, email.indexOf('@'));
	var company = email.trim().substring(email.indexOf('@')+1);
	var domain = email.trim().substring(email.lastIndexOf('.')+1);
	
	document.getElementById('emailPart').value = part;
	document.getElementById('companyName').value = company;
	document.getElementById('domain').value = domain;
}