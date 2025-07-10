function showTab(tabName) {
	document.getElementById('attractions').style.display = 'none';
	document.getElementById('facts').style.display = 'none';
	document.getElementById('news').style.display = 'none';

	document.getElementById(tabName).style.display = 'block';
}