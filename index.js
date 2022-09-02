// Navbar right side dropdown menu
const dropdownBtn = document.querySelector('#dropdownBtn');
const dropdownMenu = document.querySelector('#dropdownMenu');

dropdownBtn.addEventListener('click', () => {
	if (dropdownMenu.style.display == 'block') {
		dropdownMenu.style.display = 'none';
	} else {
		dropdownMenu.style.display = 'block';
	}
});
