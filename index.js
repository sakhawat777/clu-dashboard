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
// subItem
const forSubItemBtn = document.querySelector('#forSubItem');
const subItemMenu = document.querySelector('#subItem');

forSubItemBtn.addEventListener('click', () => {
	if (subItemMenu.style.display == 'block') {
		subItemMenu.style.display = 'none';
	} else {
		subItemMenu.style.display = 'block';
	}
});
