f = document.getElementById('home').querySelector('form');
f.addEventListener('submit', saveEmail);

function saveEmail(e) {
	e.preventDefault();
	console.log(`Email ${f.querySelector('input').value} saved`);
}